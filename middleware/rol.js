//* importaciones
const {handleHttpError} =  require("../utils/handleError")

/**
 * Array con los lores permitidos
 */
const checkRol = (roles) => (req, res, next) => {
    try{
        //? Estraemos los datos de la req
        const {user} = req;
        
        //? Estraemos el rol de los datos del User que por predeterminado es "Invitado"
        const rolesByUser = user.role; //TODO ["invitado"]
        
        //? hace la comparación del rol que tiene el usuario con el que se define en la ruta.
        const checkValueRol = roles.some((rolSingle) => rolesByUser.includes(rolSingle)) // Devuelve un boolean

        //? Condición en caso de error mostrara 403
        if(!checkValueRol){
            handleHttpError(res, "USER_NOT_PERMISSIONS", 403)
        }
        next()

    }catch(e){
        handleHttpError (res, "ERROR_PERMISSIONS", 403)
    }
}

module.exports = checkRol