//* Importamos y guardamos express, router en una variable
const express = require('express');

//* Importamos middleware
const uploadMiddlewareFotoTemp =require('../utils/handleFotoTemp');
const router = express.Router();
//* Importamos funcion del controlador 
const {getItems, createItems, deleteItems, getItem} = require('../controllers/fototemp');
const { text } = require('express');
//* Importamos validate
const {validatorGetItem} = require ('../validators/registro')

//* Importamos  authMiddleware
const {authMiddleware} = require("../middleware/session");

// * Importamos checkrol
const checkRol = require('../middleware/rol');

//? Mostrar lista de datos 
router.get('/', getItems);

//? Creamos ruta para optener detalle de un dato almacenado en la DB
router.get('/:id',authMiddleware,checkRol(['aprendiz', 'funcionario', 'gestor', 'seguridad', 'invitado']),validatorGetItem,getItem);

//? Creamos ruta para eliminar datos de la base de datos
router.delete('/:id',authMiddleware, checkRol(['aprendiz', 'funcionario', 'gestor', 'seguridad', 'invitado']),validatorGetItem,deleteItems);

//? implementamos ruta de middleware para subir un archivo en una peticionenviar utilizar en caso de se envien varios datos usar multi
//? Ruta para subir una fotografia de reconocimiento
router.post('/', authMiddleware, createItems);


module.exports = router;