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
            return res.json({
                msg: 'El_Usuario_No_Tiene_Permisos'
            });
        }
        next()

    }catch(e){
        return res.json({
            msg: 'El_Usuario_No_Tiene_Permisos'
        });
    }
}

module.exports = checkRol