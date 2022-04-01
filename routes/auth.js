//* Importamos y guardamos express, router en una variable
const { Router } = require('express');
const express = require('express');
const { matchedData } = require('express-validator');
const router = express.Router();
//* Importamos funcion del controlador 
//* Importamos loginctrl
const {loginCtrl, registerCtrl, confirmEmail, forgotPassword, resetPassword} = require ("../controllers/user")

//* Importamos validacion CreateItem
const {validatorLogueo,validatorRegister} = require ('../validators/auth');

//* Importamos encriptacion y comparacion
const {encrypt,compare} = require('../utils/handlePassword');
const { userModel } = require('../models');



//?  Ruta Crear registro 
router.post("/register", validatorRegister, registerCtrl);

//? Ruta  Login 
router.post("/login", validatorLogueo, loginCtrl);

//? Ruta  confirmar token 
router.get("/confirm/:token", confirmEmail);

//? Ruta olvidar contraseña
router.put('/forgot-password', forgotPassword);

//? ruta para cambiar el password
router.put('/reset-password', resetPassword);

//! exportamos rutas
module.exports = router;