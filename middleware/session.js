//* Importaciones
const {handleHttpError} = require ("../utils/handleError");
const {verifyToken} = require('../utils/handleJwt')
const { userModel } = require("../models")
const authMiddleware = async(req,res,next) =>{
    //? Condicion 
    try{        
        if (!req.headers.authorization) {
            handleHttpError(res,"NOT_TOKEN", 401);
            return
        }
        const token =req.headers.authorization.split(' ').pop();
        // verificamos la data del token
        const dataToken = await verifyToken(token) 
        // indicamos condicion en caso de que no exista
        if (!dataToken._id) {
            handleHttpError(res, "ERROR_ID_TOKEN", 401);
            return
        }
        // Creamos 
        const  user = await userModel.findById(dataToken._id)
        req.user = user
        next()
        
    }catch(e){
        handleHttpError (res, "NOT_SESSION", 401)
    }
}

module.exports = {authMiddleware}