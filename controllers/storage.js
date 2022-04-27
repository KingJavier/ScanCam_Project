//* Importaciones
const fs = require("fs");
const { matchedData } = require("express-validator");
const { storageModel, userModel   } = require("../models");
const { decodeSign} = require("../utils/handleJwt");
const { handleHttpError } = require("../utils/handleError");
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

//? ../storage que es donde almacena los archivos enviados.
const MEDIA_PATH = `${__dirname}/../storage`;

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
    const data = await storageModel.find({},{deleted:0, createdAt:0, updatedAt:0});
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
//? método para obtener en detalle vel elemento enviado donde es necesatio que se envie el ID del registro en la DB.
const getItem = async (req, res) => {
  try {

    //? Filtramos el id y se alamacena en {id}.
    req = matchedData(req);
    const {id} = req;
    //? integramos constante que buscara segun un id predeterminado
    const data = await storageModel.findById(id,{deleted:0, createdAt:0, updatedAt:0});
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
    //? Traemos el base64 enviado desde el front
    const { base } = req.body;
    
    try {
      //?Creamso un nombre aleatorio dependiendo de la fecha y el tiempo actual
      var fileName = new Date().getTime();
    
      //? Definimos la carpeta donde se almacenaran las imagenes temporalmente.
      var path = './storage/';

      //? Defiminos las el formato de imagen que se asiganara despues de codificar la base64
      var optionalObj = {'fileName': fileName, 'type':'jpg'};

      //? Se emplea una libreria para la conversión de la base64 tomada por la camara a una imagen jpg.
      var imageInfo = base64ToImage(base,path,optionalObj);

      //? Se establece la direccion con el path y el nombre del archivo
      var direccion = path+imageInfo.fileName

    }catch(e){
    //? implementamos el manejador de errorres
    console.log(e);
    res.status(400).json("Base 64 Errorea")
    }

    try {
      var result = await cloudinary.v2.uploader.upload(direccion);
    } catch (e) {
      //? implementamos el manejador de errorres
      console.log(e);
      res.status(500).json("Error subiendo imagen a cloudinary")
    }

    //? definimos el nombre y la Url del archivo enviado 
    const fileData = {
      url: result.url,
      filename:imageInfo.fileName,
      public_id: result.public_id,
    };

    //? Se sube a la base de datos segun el modelo
    const dataI = await storageModel.create(fileData);

    //? extraemos el token de los headers de la petición.
    const token =req.headers.authorization.split(' ').pop();

    //? Decodificamos el token 
    const datatoken = await decodeSign(token);
    //console.log('DATA PRUBEA',datatoken);

    //? Verificamos que la el token si sea gnerado por nosotros
    if(datatoken === null){
      return res.status(404).json({
        msg: "ERROR_OBTENER_DATA"
      });
    };

    //? Extraemos el id del usuario que se logueo   
    const id = datatoken._id;

    //? Verificamos que exista el usuario en la base de datos
    const dataUser = await userModel.findById(id);

    //? Extraemos el personId de la base de datos de la persona logueada
    const personId = dataUser.personId;

    //? Esta es la ruta que ira en la peticion para ejecutar la api 
    const endpoint = process.env.endpoint + "/face/v1.0/persongroups/" + GRUPO_PERSONAS_ID + "/persons/" + personId + "/persistedfaces";

    //? Extraemos la direccion url de la imagen y la guardamos en una variable
    const imgUrl = fileData.url;

    //TODO console.log(imgUrl);

    //! Integramos la imagen a la api de microsoft azure por medio de axios
    axios({
      //? Establecemos especificaciones generales 
      method: 'post',
      url: endpoint,
      data: {
        url: imgUrl,
      },
      params:{
        detectionModel:'detection_03',
        returnFaceId:true,
        returnFaceAttributes:'headpose,mask',
      },
      //? Establecemos el header
      headers: { 'Ocp-Apim-Subscription-Key': subscriptionKey }
    }).then(function (response) {
      //? Buscamos mensaje luego de la ejecucion 
        //console.log('Status text: ' + response.status)
        //console.log('Status text: ' + response.statusText)
        //console.log(response.data)

        var persistedFaceId = response.data;

        try {
          axios({
            //? Establecemos especificaciones generales 
            method: 'post',
            url: "https://scancam.cognitiveservices.azure.com/face/v1.0/persongroups/usuario/train",
            data: {
            },
            //? Establecemos el header
            headers: { 'Ocp-Apim-Subscription-Key': subscriptionKey }
          }).then(function (response) {
            //? Buscamos mensaje luego de la ejecucion 
              //console.log('Status text: ' + response.status)
              //console.log('Status text: ' + response.statusText)
            //console.log("Si se entreno",response.data)
      
            //? codigo de satisafaccion al enviar un archivo
            res.status(201);
            const dataImg = {
              data: dataI,
              persistedFaceId: persistedFaceId ,
            };
            //? mostramos los datos que se quieren subir 
            res.send({ dataImg });
      
          }).catch(function (error) {
            //? En caso de error mostrar 
              console.log(error)
              return res.status(404).json({
                msg: "ERROR AXIOS AL ENTRENAR LA MAQUINA"
              });
          });
        } catch (error) {
          console.log(error)
          return res.status(404).json({
            msg: "ERROR AL ENTRENAR LA MAQUINA"
          });
        }

    }).catch(function (error) {
      //? En caso de error mostrar 
        console.log(error)
        return res.status(404).json({
          msg: "ROSTRO NO ENCONTRADO"
        });
    });

  } catch (e) {
    //? implementamos el manejador de errorres
    console.log(e);
    res.send(handleHttpError(res, ));
    return res.status(403).json({
      msg: "ERROR_SUBIR_ARCHIVO"
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
    const dataFile = await storageModel.findById(id);
    //? eliminamos dato en la base de datos 
    const deleteResponse = await storageModel.delete({ _id: id });
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
     // updateItems,
    getItem,
};