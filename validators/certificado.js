//* importamos check
const {check} = require ("express-validator");
const  validateResult = require('../utils/handleValidators');

//? creamos validacion para la funcion get
const validatorGetItem=[
    //? otorgamos validaciones para cada uno de nuestros atributos
    check("id").exists().isMongoId(),
    (req, res, next) => {
        return validateResult(req, res, next)
    }
];

//! exportamos validator
module.exports = { validatorGetItem }; 