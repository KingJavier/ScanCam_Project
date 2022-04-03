//* Importaciones
const { matchedData } = require("express-validator");
const { registroModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");
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
    const data = await registroModel.findAllData({});

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
//? método para obtener en detalle del elemento enviado donde es necesatio que se envie el ID del registro en la DB.
const getItem = async (req, res) => {
  try{
    req = matchedData(req);
    
    //? Filtramos el id y se alamacena en {id}.
    const {id} = req;
    
    //? integramos constante que buscara segun un id predeterminado
    const data = await registroModel.findOneData(id);
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
//? metodo para crear registro de entrad guardar un item 
const createItems = async (req, res) => {
  try {
    //? optenemos el cuerpo de la req 
    const body = matchedData(req);
    //? Se sube a la base de datos segun el modelo
    const data = await registroModel.create(body);
    //? codigo de satisafaccion al enviar un archivo
    res.status(201);
    //? mostramos los datos que se quieren subir 
    res.send({ data });
  } catch (e) {
    //? implementamos el manejador de errorres
    handleHttpError(res, "ERROR_CREATE_ITEMS");
  }
};

/**
 *  Actualizar un registro
 * @param {*} req
 * @param {*} res
 */
//? metodo para actualizar un registro 
const updateItems = async (req, res) => {
  try {
    //? Filtramos el id de la req
    const {id, ...body} = matchedData(req);
    //? actualizamos dato en la DB dependiendo el ID recibido y lo almacenamso en data
    const data = await registroModel.findOneAndUpdate(
      id, body
    );
    res.send({ data });
  } catch (e) {
    //? implementamos el manejador de errorres
    handleHttpError(res, "ERROR_UPDATE_ITEMS");
  }
};

/**
 * Eliminar un registro
 * @param {*} req
 * @param {*} res
 */
//? metodo para Eliminar un registro 
const deleteItems = async (req, res) => {
  try{
    //? Filtramos el id de la req
    req = matchedData(req);
    const {id} = req;
    //? eliminamos dato en la base de datos 
    const deleteResponse = await registroModel.delete({_id:id});
    //? Enviamos mensaje de confirmacion
    const data = {
      deleted: deleteResponse.matchedCount
    }
    res.send({data});
  }catch(e){
    console.log(e)
    //? implementamos el manejador de errorres
    handleHttpError(res,"ERROR_DELETE_ITEM")
  }
};

//! Exportaciones
module.exports = { getItems, getItem, createItems, updateItems, deleteItems };