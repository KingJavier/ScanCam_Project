//* Importaciones
const fs = require("fs");
const { matchedData } = require("express-validator");
const { fototempModel, registroModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");
const { userModel } = require("../models");
const axios = require('axios');
const cloudinary =require('cloudinary');
const base64ToImage =require('base64-to-image');

//? Configuración de cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

//? Ponemos el id del grupo de personas que vamos a crear 
var GRUPO_PERSONAS_ID = process.env.GRUPO_PERSONAS_ID;

//? Llave de Azure
const subscriptionKey =  process.env.key; 
const endpoint = process.env.endpoint + "/face/v1.0/detect";
const endpoint2 = process.env.endpoint +  '/face/v1.0/identify';
const endpointRegEnt = process.env.PUBLIC_URL + "/api/registro";
const endpointRegSal = process.env.PUBLIC_URL + "/api/regsalida";


//TODO ../storage que es donde almacena los archivos enviados.
const MEDIA_PATH = `${__dirname}/../fototemp`;

//? creamos funciones para creacion del crud
/**
 * Obtener lista de la base de datos!
 * @param {*} req
 * @param {*} res
 */
//? método para obtener Lista de los archivos recividos de la base de datos.
const getItems = async (req, res) => {
    try {
        //? integramos constante que buscara diversos datos
        const data = await fototempModel.find({},{deleted:0, updatedAt:0});
        console.log(data);
        res.send({ data });
    } catch (e) {
        console.log(e)
        //? implementamos el manejador de errorres
        return res.status(501).json({
            msg: "ERROR_LIST_ITEMS"
        });
    }
};

/**
 * Obtener un detalle
 * @param {*} req
 * @param {*} res
 */
//? método para obtener en detalle del elemento enviado donde es necesatio que se envie el ID del registro en la DB.
const getItem = async (req, res) => {
    try {
        //? Filtramos el id y se alamacena en {id}.
        req = matchedData(req);
        const {id} = req;
        //? integramos constante que buscara segun un id predeterminado
        const data = await fototempModel.find(id,{deleted:0, updatedAt:0});
        res.send({ data });
    } catch (e) {
        console.log(e)
        //? implementamos el manejador de errorres
        return res.status(501).json({
            msg: "ERROR_DETALLE_ITEMS"
        });
    }
};

/**
 * Insertar un registro
 * @param {*} req
 * @param {*} res
 */
//? metodo para subir guardar un item 
const createItems = async (req, res) => {
    try {
        const tokenUsuPet = req.headers.authorization;

        const img = req.body.base;
        let buff = Buffer.from(img, 'base64');

        try {
            //! Integramos el reconocimiento facial de la api de microsoft azure por medio de axios
            axios({
                //? Establecemos especificaciones generales para el reconocimiento
                method: 'post',
                url: endpoint,
                params:{
                    //? Establecemos modelo de reconocimiento
                    recognitionModel: 'recognition_04',
                    detectionModel:'detection_03',
                    returnFaceId:true,
                    returnFaceAttributes:'headpose,mask',
                },
                data:buff,
                headers: { 
                    'Content-Type': 'application/octet-stream',
                    'Ocp-Apim-Subscription-Key': subscriptionKey
                }
            }).then(function(response) {
                //? Buscamos mensaje luego de la ejecucion 
                //console.log('Status text: ' + response.status)
                //console.log('Status text: ' + response.statusText)

                //? Guardamos en un avariable el id que extraemos cuando se detecta una cara en la imagen
                const faceId = response.data[0].faceId;

                try {
                    //! Integramos otro metodo axios para extraer la cara con la mayor coincidencia
                    axios({
                    //? Establecemos especificaciones generales para el reconocimiento
                        method: 'post',
                        url: endpoint2,
                        data: {
                            //? Especificamos que propiedades ha de tener el identificador
                            personGroupId: "usuario",
                            faceIds: [
                                faceId
                            ],
                            //? Especificamos parametros para el resultado del identificador 
                            maxNumOfCandidatesReturned: 1,
                            confidenceThreshold: 0.7
                        },
                        headers: { 'Ocp-Apim-Subscription-Key': subscriptionKey }
                    }).then(function (response) {
                        //? Mostramos mensaje luego de la ejecucion 
                        //console.log('Status text: ' + response.status)
                        //console.log('Status text: ' + response.statusText)
                        //console.log(response.data)
                        
                        //? Generamos un try catch con el cual traeremos el person y la coincidencia del resultado
                        try {
                            //? Instanciamos en variables el personId y la confianza del identificador 
                            var personId = response.data[0].candidates[0].personId;
                            var confidence = response.data[0].candidates[0].confidence; 
                        } catch(e) {
                            //? En caso de error mostrar 
                            console.log(e);
                            return res.status(404).json('ERROR ROSTRO NO ENCONTRADO')
                        }
                        //console.log(personId);
                        //console.log(confidence);

                        //? Generamos un try catch con el cual traeremos datos persongrouperson
                        try {
                            //! Extraemos la informacion del Person Group Person de la base de datos Azure 
                            const endpointGetPerson = process.env.endpoint + "/face/v1.0/persongroups/" + GRUPO_PERSONAS_ID + "/persons/" + personId;
    
                            axios({
                                 //? Establecemos especificaciones generales para el reconocimiento
                                method: 'get',
                                url: endpointGetPerson,
                                headers: { 'Ocp-Apim-Subscription-Key': subscriptionKey }
                            }).then( async function (response) {
                                //? Mostramos mensaje luego de la ejecucion de los resultados obtenidos 
                                //console.log('Status text: ' + response.status)
                                //console.log('Status text: ' + response.statusText)
                                //console.log(response.data)
    
                                //? Guardamos el nombre de la cara en una variable id
                                const id = response.data.name;
    
                                try {
                                    //? Buscamos en la base de datos que se encuentre un usuario existente  segun el id 
                                    var userData = await userModel.findById(id,{createdAt:0, updatedAt:0, deleted:0, personId:0, stateEmail:0, resetCode:0, idImgCertificado:0});
                                } catch (e) {
                                     //? En caso de error mostrar 
                                    console.log(e);
                                    // console.log();
                                    const tipoError = "ERROR_TRAYENDO_DATAUSER";
                                    const devolver = {
                                        tipoError,
                                    }
                                    return res.status(404).json(devolver)
                                }

                                if (userData == null) {
                                    // console.log();
                                    const tipoError = "ERROR PORQUE EL USUARIO ENCONTRADO NO EXISTE EN LA BASE DE DATOS";
                                    const devolver = {
                                        tipoError,
                                    }
                                    return res.status(404).json(devolver)
                                }

                                if(userData.idRegistro != ''){

                                    const idReg = userData.idRegistro;

                                    try {
                                        
                                        const regEnt = await registroModel.findById(idReg);
                                        var idRegEntrada = regEnt._id;
    
                                        var confirmacion = regEnt.confirmacion;
                                    } catch (error) {
                                        console.log(error);
                                        // console.log();
                                        const tipoError = "USUARIO NO TIENE REGISTRO DE ENTRADA";
                                        const devolver = {
                                            tipoError
                                        }
                                        return res.status(404).json(devolver)
                                    }

                                    try {
                                        const regEnt = await registroModel.findById(idReg);
                                        const hoy = new Date()
                                        const fechaRegEnt = regEnt.createdAt;
                                        const masminutos = (fecha) => {
                                            fecha.setMinutes(fecha.getMinutes() + 1);
                                            return fecha;
                                        };
                                        const fechaMasMin = masminutos(fechaRegEnt);

                                        if (hoy >= fechaMasMin ) {

                                            const doc = userData.documento;
                                            const name = userData.name;
                                            const ape = userData.apellido;
                                            const email = userData.email;
                                            const rol = userData.role[0];

                                            try {
                                                if (confirmacion == true) {
                                                    //? Creamos registro de entrada con los datos del usuario.
                                                    try {
                                                        axios({
                                                            method: 'post',
                                                            url: endpointRegSal,
                                                            data: {
                                                                name: name,
                                                                apellido: ape,
                                                                documento: doc,
                                                                email: email,
                                                                role: rol,
                                                                confirmacion: "true",
                                                            },
                                                            headers: { Authorization: tokenUsuPet }
                                                        }).then( async function (response) {
                                                            //console.log('Status text: ' + response.status)
                                                            //console.log('Status text: ' + response.statusText)
                                                            const dataUser = response.data;
            
                                                            const idRegSal = dataUser.data._id;
            
                                                            const regEntandSal = await registroModel.findByIdAndUpdate(idRegEntrada, {idregent: idRegSal});

                                                            var vacio = await userModel.findByIdAndUpdate(id,{idRegistro: ""});
            
                                                            // console.log(regEntandSal);

                                                            const tipo = {tipo : "SALIDA"}
                                                            
                                                            const resData = {
                                                                dataUser: userData,
                                                                tipo: tipo,
                                                                coincidencia: confidence,
                                                            };

                                                            //! ---------
                                                            //? codigo de satisafaccion al enviar un archivo
                                                            res.status(response.status);
                                                            //? mostramos los datos que se quieren subir 
                                                            res.send(resData);
                                                            //! ---------
                                                        }).catch(function (error) {
                                                            console.log(error);
                                                            // console.log();
                                                            const tipoError = "ERROR_REG_SALIDA";
                                                            const devolver = {
                                                                tipoError
                                                            }
                                                            return res.status(404).json("ERROR_REG_SALIDA")
                                                        });
            
                                                    } catch (e) {
                                                        console.log(e);
                                                        // console.log();
                                                        const tipoError = "ERROR_CREANDO_REGISTRO DE ENTRADA";
                                                        const devolver = {
                                                            tipoError,
                                                        }
                                                        return res.status(404).json(devolver)
                                                    }
                                                } else {
                                                    // console.log();
                                                    const tipoError = "USUARIO NO TIENE REGISTRO DE ENTRADA";
                                                    const devolver = {
                                                        tipoError,
                                                    }
                                                    return res.status(404).json(devolver)
                                                };
                                            } catch (e) {
                                                console.log(e);
                                                // console.log();
                                                const tipoError = "ERROR_VRRIFICANDO_CONFIRMACIÓN";
                                                const devolver = {
                                                    tipoError,
                                                }
                                                return res.status(404).json(devolver)
                                            };
                                        }else{
                                            const tipoError = "NO SE PERMITE SALIR HASTA NO PASAR UN MINUTO";
                                            const devolver = {
                                                tipoError
                                            }
                                            return res.status(404).json(devolver)
                                        }

                                    } catch (error) {
                                        console.log(error);
                                        const tipoError = "ERROR HASTA NO PASAR UN MINUTO";
                                        const devolver = {
                                            tipoError
                                        }
                                        return res.status(404).json(devolver)
                                    }

                                }else{
                                    //? Mostramos el usuario obtenido 
                                    //console.log("DATAUSER-->",userData);
                                    const doc = userData.documento;
                                    const name = userData.name;
                                    const ape = userData.apellido;
                                    const email = userData.email;
                                    const rol = userData.role[0];
                                    const mongoid ="626165b49fa5856403698805";

                                    //? Creamos registro de entrada con los datos del usuario.
                                    try {
                                        axios({
                                            method: 'post',
                                            url: endpointRegEnt,
                                            data: {
                                                name: name,
                                                apellido: ape,
                                                documento: doc,
                                                email: email,
                                                role: rol,
                                                confirmacion: "true",
                                                idregent: mongoid
                                            },
                                            headers: { Authorization: tokenUsuPet }
                                        }).then(async function (response) {
                                            //console.log('Status text: ' + response.status)
                                            //console.log('Status text: ' + response.statusText)
                                            const dataUser = response.data;
                                            const idRegEn = response.data.data._id;

                                            //console.log(dataUser);
                                            
                                            //? Combinamos los dos resultados para enviar solo una respuesta
                                            const tipo = {tipo : "ENTRADA"}
    
                                            const resData = {
                                                dataUser: userData,
                                                tipo: tipo,
                                                coincidencia: confidence,
                                            };

                                            try {
                                                //? Buscamos en la base de datos que se encuentre un usuario existente  segun el id 
                                                var dataUsu = await userModel.findByIdAndUpdate(id, {idRegistro : idRegEn});
                                            } catch (e) {
                                                //? En caso de error mostrar 
                                                console.log(e);
                                                // console.log();
                                                const tipoError = "ERROR_TRAYENDO_DATAUSER";
                                                const devolver = {
                                                    tipoError,
                                                    
                                                }
                                                return res.status(404).json(devolver)
                                            }
                                            //! ---------
                                            //? codigo de satisafaccion al enviar un archivo
                                            res.status(response.status);
                                            //? mostramos los datos que se quieren subir 
                                            res.send(resData);
                                            //! ---------
                                            }).catch(function (error) {
                                                console.log(error);
                                                // console.log();
                                                const tipoError = "ERROR_REG_ENTRADA_POSIBLEMENTE_NO_TIENE_ROL_INDICADO";
                                                const devolver = {
                                                    tipoError,
                                                }
                                                return res.status(404).json(devolver)
                                            });

                                    } catch (e) {
                                        console.log(e);
                                        // console.log();
                                        const tipoError = "ERROR_CREANDO_REGISTRO DE ENTRADA";
                                        const devolver = {
                                            tipoError,
                                            
                                        }
                                        return res.status(404).json(devolver)
                                    }
                                }
                            
                            }).catch(function (error) {
                                //? En caso de error mostrar 
                                console.log(error);
                                // console.log();
                                const tipoError = "ERROR_TRAYENDO_DATA_USER";
                                const devolver = {
                                    tipoError,
                                    
                                }
                                return res.status(404).json(devolver)
                            });
                        } catch (e) {
                             //? En caso de error mostrar 
                            console.log(e);
                            // console.log();
                            const tipoError = "ERROR_GET_PERSON_ID";
                            const devolver = {
                                tipoError,
                                
                            }
                            return res.status(404).json(devolver)
                        }
                    }).catch(function (error) {
                         //? En caso de error mostrar
                        console.log(error);
                        // console.log();
                        const tipoError = "Error para encontrar coincidencia";
                        const devolver = {
                            tipoError,
                            
                        }
                        return res.status(404).json(devolver)
                    });
                } catch (e){
                     //? En caso de error mostrar 
                    console.log(e);
                    // console.log();
                    const tipoError = "ERROR ROSTRO NO ENCONTRADO";
                    const devolver = {
                        tipoError,
                        
                    }
                    return res.status(404).json(devolver)
                } 
            }).catch( function (error) {
                 //? En caso de error mostrar 
                console.log(error);
                return res.send("ERROR DETECTANDO ROSTRO")
            });

        } catch (e) {
             //? En caso de error mostrar 
            console.log(e);
            return res.send("ERROR AZURE")
        }

    } catch (e) {
        //? implementamos el manejador de errorres
        console.log(e);
        return res.status(501).json({
            msg: "ERROR_CREATE_ITEM"
        });
    }
};

/**
 * Eliminar un registro
 * @param {*} req
 * @param {*} res
 */
//? metodo para Eliminar un registro 
const deleteItems = async (req, res) => {
    try {
        //? Filtramos el id de la req
        req = matchedData(req);
        const {id} = req;
        const dataFile = await fototempModel.findById(id);
        //? eliminamos dato en la base de datos 
        const deleteResponse = await fototempModel.delete({ _id: id });
        const { filename } = dataFile;
        //? concatenamos nombre        
        const filePath = `${MEDIA_PATH}/${filename}`; //TODO c:/miproyecto/file-1232.png
        //? Eliminacion de archivo en el direcctorio
        //TODO fs.unlinkSync(filePath);
        //? Enviamos mensaje de confirmacion
        const data = {
        filePath,
        deleted: deleteResponse.matchedCount,
        };

        res.send({ data });
    } catch (e) {
        //? implementamos el manejador de errorres
        console.log(e);
        return res.status(501).json({
            msg: "ERROR_DELETE_ITEMS"
        });
    }
};

//! Exportaciones
module.exports = {
    getItems,
    createItems,
    deleteItems,
    getItem
};