//* Importamos y guardamos express, router en una variable
const { Router } = require('express');
const express = require('express');
const { matchedData } = require('express-validator');
const router = express.Router();
//* Importamos funcion del controlador 
//* Importamos loginctrl
const {loginCtrl, registerCtrl, confirmEmail, 
    forgotPassword, resetPassword, getUsers,
    desactivarUser, activarUser, actualizarRol,
    renviarverfi, createExcel, numerorostros,
    checkToken, rolctrl
} = require ("../controllers/user")

//* Importamos validacion CreateItem
const {validatorLogueo,validatorRegister} = require ('../validators/auth');

//* Importamos encriptacion y comparacion
const {encrypt,compare} = require('../utils/handlePassword');
const { userModel } = require('../models');

//* Importamos  authMiddleware
const {authMiddleware} = require("../middleware/session");

//* Importamos el validador de los roles.
const checkRol = require('../middleware/rol');

//*Importamos utils
const uploadMiddleware = require('../utils/handleExcel');


//?  Ruta Crear registro 
router.post("/register", validatorRegister, registerCtrl);

//? Ruta  Login 
router.post("/login", validatorLogueo, loginCtrl);

//? Ruta para enviar varias veces el verifyemail
router.post("/verifyemail",  renviarverfi);

//? Ruta listar Usuarios
router.get('/users', authMiddleware, checkRol(['gestor', 'seguridad']), getUsers);

//? ruta para inhabilitar usuarios
router.put('/deshabilitar/:id', authMiddleware,checkRol(['gestor']), desactivarUser);

//? ruta para inhabilitar usuarios
router.put('/activar/:id', authMiddleware,checkRol(['gestor']), activarUser);

//? Ruta  confirmar token 
router.get("/confirm/:token", confirmEmail);

//? Ruta olvidar contraseña
router.put('/forgot-password', forgotPassword);

//? ruta para cambiar el password
router.put('/reset-password', resetPassword);

//? ruta para actulizar el rol.
router.put('/actualizar-rol/:id', authMiddleware, checkRol(['gestor']), actualizarRol);

//? implementamos ruta de middleware para subir un archivo en una peticionenviar utilizar en caso de se envien varios datos usar multi
router.post('/excel',authMiddleware, checkRol(['gestor']), uploadMiddleware.single("MyExcel"), createExcel);

//? Ruta mostrar cuantas caras hay registradas en azure
router.get("/numrostros", numerorostros);

//? Ruta mostrar cuantas caras hay registradas en azure
router.get("/rolusuario", rolctrl);

//? Ruta para verificar el estado del Token
router.get("/token", checkToken);

//! exportamos rutas
module.exports = router;