//* importamos check
const {check} = require ("express-validator");
const  validateResult = require('../utils/handleValidators');

//? creamos constante validadora
const validatorCreateItem=[
    //? otorgamos validaciones para cada uno de nuestros atributos
    check("name")
    .exists()
    .notEmpty(),
    check("apellido")
    .exists()
    .notEmpty(),
    check("documento")
    .exists()
    .notEmpty(),
    check("email")
    .exists()
    .notEmpty(),
    check("role")
    .exists()
    .notEmpty(),
    check("confirmacion")
    .exists()
    .notEmpty(),
    // check("idregent")
    // .exists()
    // .notEmpty(),
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
module.exports = { validatorCreateItem, validatorGetItem };