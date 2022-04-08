//* Importaciones
const fs = require("fs");
const { matchedData } = require("express-validator");
const { fototempModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");
const { userModel } = require("../models");
const axios = require('axios');

//? Ponemos el id del grupo de personas que vamos a crear 
var GRUPO_PERSONAS_ID = process.env.GRUPO_PERSONAS_ID;

//? Llave de Azure
const subscriptionKey =  process.env.key; 

const endpoint = process.env.endpoint + "/face/v1.0/detect";

const endpoint2 = process.env.endpoint +  '/face/v1.0/identify';

const endpointRegEnt = "https://apiscancam01.herokuapp.com" + "api/registro";


//TODO http://localhost:3001
const PUBLIC_URL = process.env.PUBLIC_URL;

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
        const data = await fototempModel.find({});
        console.log(data);
        res.send({ data });
        
    } catch (e) {
        //? implementamos el manejador de errorres
        handleHttpError(res, "ERROR_LIST_ITEMS");
    }
};

/**
 * Obtener un detalle
 * @param {*} req
 * @param {*} res
 */
//? método para obtener en detalle vel elemento enviado donde es necesatio que se envie el ID del registro en la DB.
const getItem = async (req, res) => {
    try {
        //? Filtramos el id y se alamacena en {id}.
        req = matchedData(req);
        const {id} = req;
        //? integramos constante que buscara segun un id predeterminado
        const data = await fototempModel.findById(id);
        res.send({ data });
    } catch (e) {
        console.log(e)
        //? implementamos el manejador de errorres
        handleHttpError(res, "ERROR_DETALLE_ITEMS");
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
        //?  Almacenamos en una constante el file
        const { file } = req;
        //? definimos el nombre y la Url del archivo enviado 
        const fileData = {
        url: `${PUBLIC_URL}/${file.filename}`,
        filename: file.filename,
        };
        
        //? Se sube la imagen a la base de datos segun el modelo
        const data = await fototempModel.create(fileData);

        //? Guardamos la url de la imagen que se traera de la base de datos 
        const imageUrl = data.url;

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
                console.log('Status text: ' + response.status)
                console.log('Status text: ' + response.statusText)
                console.log(response.data)

                //? Guardamos en un avariable el id que extraemos cuando se detecta una cara en la imagen
                const faceId = response.data[0].faceId;

                // let faceId = "d0a7a2d4-7032-4309-a7c1-88b958cb6b3e"; 

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
                        console.log('Status text: ' + response.status)
                        console.log('Status text: ' + response.statusText)
                        console.log(response.data)
                        
                        //? Generamos un try catch con el cual traeremos el person y la coincidencia del resultado
                        try {
                            //? Instanciamos en variables el personId y la confianza del identificador 
                            var personId = response.data[0].candidates[0].personId; 
                            var confidence = response.data[0].candidates[0].confidence; 

                            console.log(personId);

                        } catch(e) {
                             //? En caso de error mostrar 
                            return console.log("ROSTRO NO ENCONTRADO");
                        }
                        
                        console.log(personId);
                        console.log(confidence);

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
                                console.log('Status text: ' + response.status)
                                console.log('Status text: ' + response.statusText)
                                console.log(response.data)
    
                                //? Guardamos el nombre de la cara en una variable id
                                const id = response.data.name;
    
                                try {
                                    // Buscamos en la base de datos que se encuentre un usuario existente  segun el id 
                                    var userData = await userModel.findById(id);
                                } catch (error) {
                                     //? En caso de error mostrar 
                                    console.log(error);
                                    return handleHttpError(res, "ERROR_TRAYENDO_DATAUSER");
                                }
                                
                                //? Mostramos el usuario obtenido 
                                console.log("DATAUSER-->",userData);
                            
                            }).catch(function (error) {
                                 //? En caso de error mostrar 
                                console.log(error)
                            });
                        } catch (e) {
                             //? En caso de error mostrar 
                            return handleHttpError(res, "ERROR_GET_PERSON_ID");
                        }
                
                    }).catch(function (error) {
                         //? En caso de error mostrar 
                        return console.log("Error para encontrar coincidencia ->",error)
                    });
                } catch (error) {
                     //? En caso de error mostrar 
                    return handleHttpError(res, "ERROR_ROSTRO NO ENCONTRADO");
                } 
            }).catch(function (error) {
                 //? En caso de error mostrar 
                return console.log("ERROR DETECTANDO ROSTRO",error)
            });

        } catch (err) {
             //? En caso de error mostrar 
            return handleHttpError(res, "ERROR_AZURE");
        }

        //? codigo de satisafaccion al enviar un archivo
        res.status(201);
        //? mostramos los datos que se quieren subir 
        //? mostramos los datos que se quieren subir //? mostramos los datos que se quieren subir //? mostramos los datos que se quieren subir //? mostramos los datos que se quieren subir //? mostramos los datos que se quieren subir //? mostramos los datos que se quieren subir //? mostramos los datos que se quieren subir //? mostramos los datos que se quieren subir 
        res.send({ data });

    } catch (e) {
        //? implementamos el manejador de errorres
        return handleHttpError(res, "ERROR_SUBIR_ARCHIVO");
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
        handleHttpError(res, "ERROR_DELETE_ITEMS");
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