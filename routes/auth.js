//* Importamos y guardamos express, router en una variable
const { Router } = require('express');
const express = require('express');
const { matchedData } = require('express-validator');
const router = express.Router();
//* Importamos funcion del controlador 
//* Importamos loginctrl
const {loginCtrl, registerCtrl, confirmEmail, 
    forgotPassword, resetPassword, getUsers,
    desactivarUser, activarUser, actualizarRol
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


//?  Ruta Crear registro 
router.post("/register", validatorRegister, registerCtrl);

//? Ruta  Login 
router.post("/login", validatorLogueo, loginCtrl);

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
router.put('/actualizar-rol/:id', authMiddleware, checkRol(['gestor' ]), actualizarRol);

//! exportamos rutas
module.exports = router;