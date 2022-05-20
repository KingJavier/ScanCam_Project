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
    const data = await registroModel.findAllData({},{deleted:0, updatedAt:0});
    //console.log(data);
    res.send({ data }); 
  } catch (e) {
    //? implementamos el manejador de errorres
    console.log(e);
    return res.status(501).json({
      msg: "ERROR_LIST_ITEMS"
    });
  }
  
};

//? creamos funciones para creacion del crud
/**
 * Obtener lista de la base de datos!
 * @param {*} req
 * @param {*} res
 */
//? método para obtener cantidad de registros de la base de datos.
const getRegistros = async (req, res) => {
  try {
    //? integramos constante que buscara diversos datos
    const data1 = await registroModel.find().count();
    const data2 = await registroModel.find({role: "seguridad"}).count();
    const data3 = await registroModel.find({role: "gestor"}).count();
    const data4 = await registroModel.find({role: "invitado"}).count();
    const data5 = await registroModel.find({role: "aprendiz"}).count();
    const data6 = await registroModel.find({role: "funcionario"}).count();

    uniondata = {
      total: data1,
      seguridad: data2,
      gestor:data3,
      invitado:data4,
      aprendiz:data5,
      funcioanrio:data6,
    }
    res.send(uniondata); 

  } catch (e) {
    //? implementamos el manejador de errorres
    console.log(e);
    return res.status(501).json({
      msg: "ERROR_LIST_ITEMS"
    });
  }
  
};

//? método para obtener cantidad de registros de la base de datos.
const getRegistrossocket = async (req, res) => {
  try {
    //? integramos constante que buscara diversos datos
    const data1 = await registroModel.find().count();
    const data2 = await registroModel.find({role: "seguridad"}).count();
    const data3 = await registroModel.find({role: "gestor"}).count();
    const data4 = await registroModel.find({role: "invitado"}).count();
    const data5 = await registroModel.find({role: "aprendiz"}).count();
    const data6 = await registroModel.find({role: "funcionario"}).count();

    uniondata = {
      total: data1,
      seguridad: data2,
      gestor:data3,
      invitado:data4,
      aprendiz:data5,
      funcioanrio:data6,
    }
    return uniondata; 

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
  try{
    req = matchedData(req);
    //? Filtramos el id y se alamacena en {id}.
    const {id} = req;
    
    //? integramos constante que buscara segun un id predeterminado
    const data = await registroModel.findOneData(id, {deleted:0, updatedAt:0});
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
    console.log(e);
    return res.status(500).json({
      msg: "ERROR_CREATE_ITEMS"
    });
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
    console.log(e);
    return res.status(500).json({
      msg: "ERROR_UPDATE_ITEMS"
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
    return res.status(500).json({
      msg: "ERROR_DELETE_ITEMS"
    });
  }
};


/**
 * Eliminar un registro
 * @param {*} req
 * @param {*} res
 */
const filtroctrl = async (req, res) =>{
  const filtro = req.params;
  const fecha = filtro.createdAt;
  // console.log(filtro.createdAt);
  try {
    const guenas = await registroModel.aggregate(
      [  
        {$match: 
          {createdAt : {"$gt" : new Date(fecha)}}
        },
        {  
          $lookup: {
              from:"registrosalidas",
              localField:"idregent",
              foreignField: "_id",
              as: "regEnt",
          }
        }
      ]
    );

    res.send({guenas});
  } catch (error) {
    console.log(error)
    //? implementamos el manejador de errorres
    return res.status(500).json({
      msg: "ERROR"
    });
  }
}

//! Exportaciones
module.exports = { 
  getItems, 
  getItem, 
  createItems, 
  updateItems, 
  deleteItems, 
  getRegistros, 
  getRegistrossocket,
  filtroctrl
};