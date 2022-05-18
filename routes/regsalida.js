//* Importamos y guardamos express, router en una variable
const express = require('express');
const router = express.Router();
//* Importamos funcion del controlador 
const {getItems, createItems, deleteItems, updateItems, getItem, getRegistrosSal} = require('../controllers/regsalida');
//* Importamos validacion CreateItem
const {validatorCreateItem,validatorGetItem} = require ('../validators/regsalida')
//* Importamos  authMiddleware
const {authMiddleware} = require("../middleware/session");
//* Importamos el validador de los roles.
const checkRol = require('../middleware/rol');


//? Creamos sistema de rutas mediante el metodo get
router.get('/',authMiddleware,checkRol(['gestor', 'seguridad']), getItems);

//? Creamos sistema de rutas mediante el metodo get
router.get('/numeroregistros',authMiddleware, checkRol([ 'gestor', 'seguridad']), getRegistrosSal);

//? Creamos ruta para crear un registro a la base de datos previamente validada
router.post('/',authMiddleware, validatorCreateItem, createItems);

//? Obtener un solo detalle aplicando una validación
router.get('/:id',authMiddleware,checkRol([ 'gestor','seguridad']),validatorGetItem, getItem);

//? Actualizar registro
router.put('/:id',authMiddleware,checkRol(['gestor', 'seguridad']),validatorCreateItem, validatorGetItem,updateItems);

//? Eliminar un resigtro 
router.delete('/:id',authMiddleware,checkRol(['gestor']),validatorGetItem,deleteItems);

//! exportamos rutas
module.exports = router;