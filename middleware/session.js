//* Importaciones
const {handleHttpError} = require ("../utils/handleError");
const {verifyToken} = require('../utils/handleJwt')
const { userModel } = require("../models")
const authMiddleware = async(req,res,next) =>{
    //? Condicion 
    try{        
        if (!req.headers.authorization) {
            return res.json({
                msg: 'El_Usuario_No_Tiene_Permisos'
            });
        }
        const token =req.headers.authorization.split(' ').pop();
        // verificamos la data del token
        const dataToken = await verifyToken(token) 
        // indicamos condicion en caso de que no exista
        if (!dataToken._id) {
            return res.json({
                msg: "ERROR_ID_TOKEN"
            });
        }
        // Creamos 
        const  user = await userModel.findById(dataToken._id)
        req.user = user
        next()
        
    }catch(e){
        return res.json({
            msg: "NOT_SESSION_TOKEN"
        });
    }
}

module.exports = {authMiddleware}