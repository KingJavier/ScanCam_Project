//* Importamos bcryptjs
const bcryptjs = require("bcryptjs")
/**
 * contraseña sin encriptar
 * @param {*} passwordPlain
 */

//? Encriptamos contraseña 
const encrypt = async (passwordPlain) =>{
    //? Generamos encriptacion aleatoria 
    const hash = await bcryptjs.hash(passwordPlain, 10)
    //? Retornamos 
    return hash
};

/**
 * 
 * @param {*} passwordPlain 
 * @param {*} hashPassword
 */
//? comparamos la contraseña plana con la contraseña encriptada
const compare =async (passwordPlain,hashPassword) =>{
    //? Creamos comparacion 
    return await bcryptjs.compare(passwordPlain,hashPassword)
}

//! exporamos los helpers
module.exports = { encrypt, compare};