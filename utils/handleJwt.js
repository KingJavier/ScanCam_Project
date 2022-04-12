//* Importamos jswebtoken
const jwt = require("jsonwebtoken");
const { any } = require("./handleStorage");
//? Hacemos uso de la LlaveMaestar del .env

const JWT_SECRET = process.env.JWT_SECRET;

/**
 * Debes de pasar el objeto usuario
 * @param {*} user
 */
//? funcion para crear y firmar token
const tokenSing = async(user)=>{
    //? firmamos el token
    return jwt.sign(
        {
            //? PAYLOAD de mi token
            _id: user._id,
            role: user.role,
            email: user.email
        },
        JWT_SECRET,
        {
             //? insertamos tiempo de expiracion para el token
        expiresIn: "8h",
        }
    );

}

//const getProperties = require("../utils/handlePropertiesEngine")
//const propertiesKey = getProperties()
/**
 * Debes de pasar el objecto del usario
 * @param {*} tokenJwt
 */


//? Recibimos el token y Verificamos que el token haya sido firmado por nosotros
const verifyToken = async (tokenJwt) => {
    try{
        //? Veryficamos el token 
        return jwt.verify(tokenJwt, process.env.JWT_SECRET)
    }catch(e){
        return null
    }
    
};

const decodeSign = (token) => {
    return jwt.decode(token, any);
};




//! exportacion 
module.exports = {tokenSing, verifyToken,decodeSign}
