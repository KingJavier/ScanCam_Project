//* Importaciones
const fs = require("fs");
const { matchedData } = require("express-validator");
const { fototempsalModel, registroModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");
const { userModel } = require("../models");
const axios = require('axios');
const cloudinary =require('cloudinary');

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
const endpointRegSal = process.env.PUBLIC_URL + "/api/regsalida";


//TODO ../storage que es donde almacena los archivos enviados.
const MEDIA_PATH = `${__dirname}/../fototempsal`;

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
        const data = await fototempsalModel.find({});
        console.log(data);
        res.send({ data });
    } catch (e) {
        //? implementamos el manejador de errorres
        console.log(e);
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
        const data = await fototempsalModel.findById(id);
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
        const tokenUsuPet = req.headers.authorization

        //?  Almacenamos en una constante el file
        const { file } = req;

        //console.log(file);
        //? subimos la imagen a cloudinary
        const result = await cloudinary.v2.uploader.upload(file.path);

        //? definimos el nombre y la Url del archivo enviado 
        const fileData = {
            url: result.url,
            filename: file.filename,
            public_id: result.public_id,
        };
        //console.log(fileData);
        
        //? Se sube la imagen a la base de datos segun el modelo
        const data = await fototempsalModel.create(fileData);

        //? Guardamos la url de la imagen que se traera de la base de datos 
        const imageUrl = data.url;

        // const imageUrl = "https://cdn2.estamosrodando.com/biografias/2/13/chace-crawford-170117.jpg";

        try {
            //! Integramos el reconocimiento facial de la api de microsoft azure por medio de axios
            axios({
                //? Establecemos especificaciones generales para el reconocimiento
                method: 'post',
                url: endpoint,
                params : {
                    //? Establecemos modelo de reconocimiento
                    recognitionModel: 'recognition_04',
                    returnFaceId: true,
                },
                data:{
                    url: imageUrl,
                },
                headers: { 'Ocp-Apim-Subscription-Key': subscriptionKey }
            }).then(function(response) {
                //? Buscamos mensaje luego de la ejecucion 
                //console.log('Status text: ' + response.status)
                //console.log('Status text: ' + response.statusText)
                //console.log(response.data)

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
                            confidenceThreshold: 0.5
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
                            //console.log(personId);

                        } catch(e) {
                            //? En caso de error mostrar 
                            console.log(e);
                            return res.send("ERROR ROSTRO NO ENCONTRADO");
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
                                    var userData = await userModel.findById(id);
                                } catch (e) {
                                    //? En caso de error mostrar 
                                    console.log(e);
                                    return res.send("ERROR_TRAYENDO_DATAUSER");
                                }

                                //? Mostramos el usuario obtenido 
                                //console.log("DATAUSER-->",userData);

                                const doc = userData.documento;
                                const name = userData.name;
                                const ape = userData.apellido;
                                const email = userData.email;
                                const rol = userData.role[0];

                                try {
                                    const idReg = userData.idRegistro;
                                    const regEnt = await registroModel.findById(idReg);
                                    //console.log(regEnt);
                                    var confirmacion = regEnt.confirmacion;
                                } catch (error) {
                                    console.log(e);
                                    return res.send("USUARIO NO TIENE REGISTRO DE ENTRADA");
                                }
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
                                                    confirmacion: "true"
                                                },
                                                headers: { Authorization: tokenUsuPet }
                                            }).then(function (response) {
                                                //console.log('Status text: ' + response.status)
                                                //console.log('Status text: ' + response.statusText)
                                                const dataUser = response.data;
                                                const resData = {
                                                    dataImg: data,
                                                    dataUser: dataUser,
                                                };
                                                //! ---------
                                                //? codigo de satisafaccion al enviar un archivo
                                                res.status(response.status);
                                                //? mostramos los datos que se quieren subir 
                                                res.send(resData);
                                                //! ---------
                                            }).catch(function (error) {
                                                console.log(error);
                                                return res.send("ERROR_REG_ENTRADA_POSIBLEMENTE_NO_TIENE_ROL_INDICADO")
                                            });

                                        } catch (e) {
                                            console.log(e);
                                            return res.send("ERROR_CREANDO_REGISTRO DE ENTRADA");
                                        }
                                    } else {
                                        return res.send("USUARIO NO TIENE REGISTRO DE ENTRADA");
                                    };
                                } catch (e) {
                                    console.log(e);
                                    return res.send("ERROR_VRRIFICANDO_CONFIRMACIÓN")
                                };
                            
                            }).catch(function (error) {
                                //? En caso de error mostrar 
                                console.log(error);
                                return res.send("ERROR_TRAYENDO_DATA_USER")
                            });
                        } catch (e) {
                             //? En caso de error mostrar 
                            console.log(e);
                            return res.send("ERROR_GET_PERSON_ID")
                        }
                    }).catch(function (error) {
                         //? En caso de error mostrar
                        console.log(error);
                        return res.send("Error para encontrar coincidencia")
                    });
                } catch (e) {
                     //? En caso de error mostrar 
                    console.log(e);
                    return res.send("ERROR_ROSTRO NO ENCONTRADO")
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
        return res.send("ERROR_RECIBIENDO_ARCHIVO");
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
        const dataFile = await fototempsalModel.findById(id);
        //? eliminamos dato en la base de datos 
        const deleteResponse = await fototempsalModel.delete({ _id: id });
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
        console.log(e);
        //? implementamos el manejador de errorres
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
     // updateItems,
    getItem
};