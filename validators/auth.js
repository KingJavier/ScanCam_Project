//* importamos check
const {check} = require ("express-validator");
const  validateResult = require('../utils/handleValidators');

//? creamos validación para la funcion register
const validatorRegister =[
    //? otorgamos validaciones para cada uno de nuestros atributos
    check("name")
    .exists()
    .notEmpty(),
    check("apellido")
    .exists()
    .notEmpty(),
    check("documento")
    .exists()
    .isLength({min:7, max:20})
    .notEmpty(),
    check("email")
    .exists()
    .isEmail()
    .notEmpty(),
    check("password")
    .exists()
    .isLength({min:7, max:20})
    .notEmpty(),
    check("telefono")
    .exists()
    .notEmpty(),
    check("role")
    .exists()
    .notEmpty(),
    check("staEmail"),
    // check("statusAzure"),
    
    (req, res, next) => {
        return validateResult(req, res, next)
    }
];

//? Creamos validacion para logueo de usuario
const validatorLogueo =[
    //? otorgamos validaciones para cada uno de nuestros atributos
    check("email")
    .exists()
    .isEmail()
    .notEmpty(),
    check("password")
    .exists()
    .isLength({min:7, max:20})
    .notEmpty(),
    (req, res, next) => {
        return validateResult(req, res, next)
    }
];
//? creamos validacion para la funcion get
const validatorGetItem=[
    //? otorgamos validaciones para cada uno de nuestros atributos
    check("id")
    .exists()
    .notEmpty()
    .isMongoId(),
    (req, res, next) => {
        return validateResult(req, res, next)
    }
];

//! exportamos validator
module.exports = { validatorRegister, validatorLogueo,validatorGetItem};