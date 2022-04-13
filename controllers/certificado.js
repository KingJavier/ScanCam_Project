//* Importaciones
const fs = require("fs");
const { matchedData } = require("express-validator");
const { certificadoModel, userModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");
const cloudinary =require('cloudinary');

//? Configuración de cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

//TODO ../perfil que es donde almacena los archivos enviados.
const MEDIA_PATH = `${__dirname}/../certificado`;

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
    const data = await certificadoModel.find({});
    res.send({ data });
  } catch (e) {
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
//? método para obtener en detalle vel elemento enviado donde es necesatio que se envie el ID del registro en la DB.
const getItem = async (req, res) => {
  try {
    //? Filtramos el id y se alamacena en {id}.
    req = matchedData(req);
    const {id} = req;
    //? integramos constante que buscara segun un id predeterminado
    const data = await certificadoModel.findById(id);
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
    //?  Almacenamos en una constante el file
    const { file } = req;

    //? subimos la imagen a cloudinary
    const result = await cloudinary.v2.uploader.upload(file.path);

    //? definimos el nombre y la Url del archivo enviado 
    const fileData = {
      url: result.url,
      filename: file.filename,
      public_id: result.public_id,
    };

    //? Se sube a la base de datos segun el modelo
    const data = await certificadoModel.create(fileData);
    const {user} = req;

    try {
      var datosUser = await userModel.findById(user._id);

      datosUser.idImgCertificado = data._id;
      await datosUser.save();

    } catch (error) {
      console.log(e);
      return res.status(404).json({
        msg: "USUARIO_NO_ENCONTRADO"
      });
    }

    //? codigo de satisafaccion al enviar un archivo
    res.status(201);
    //? mostramos los datos que se quieren subir 
    res.send({ data });
    
  } catch (e) {
    //? implementamos el manejador de errorres
    console.log(e);
    return res.status(500).json({
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
    const dataFile = await certificadoModel.findById(id);
    //? eliminamos dato en la base de datos 
    const deleteResponse = await certificadoModel.delete({ _id: id });
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
    getItem
};