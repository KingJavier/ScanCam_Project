//* Importaciones 
const { matchedData } = require("express-validator");
const { encrypt, compare } = require("../utils/handlePassword");
const { tokenSing, decodeSign} = require("../utils/handleJwt");
const { handleHttpError } = require("../utils/handleError");
const { userModel } = require("../models");
const { getTemplate, sendEmail } = require("../utils/handleMail");
const users = require("../models/nosql/users");



//? creamos funciones para register y login del usuario
/**
 * Este controlador es el encargado de registrar un usuario
 * @param {*} req 
 * @param {*} res 
 */
//? Controlados de registro de usaurio en la DB.
const registerCtrl = async (req, res) => {
  try {
    //? Limpiamos los datos aplicando machedData  
    req = matchedData(req);

    //? Verificamos que el usuario exista.
    const user = await userModel.findOne({email:req.email}) || null;

    //? Condición donde en caso de ser falso emplea el manejador de errores 
    if( user!== null){
      handleHttpError(res, "EMAIL_ALREADY_REGISTERED", 406);
      return
    }

    //? Encriptacion de la contraseña traida del helper
    const password = await encrypt(req.password)

    //? La encriptacion es obligatoria, se esta se alamacena en Body
    const body = { ...req, password}

    const dataUser = await userModel.create(body);

    //? seteamos un modelo
    dataUser.set ("password", undefined, {strict:false});


    //? Convinamos el token y el usuario
    const data = {
        token: await tokenSing(dataUser),
        user: dataUser
    }

    //? Obtenemos el template de Verif Email

    const template = getTemplate(req.name, data.token);

    //? Enviar el Email.
    await sendEmail(req.email, 'Confirma tu Correo', template);

    //? definimos codigo de repuesta de creacion satisfactoria
    res.status(201)
    res.send({data});
    
  } catch (e) {
    //? implementamos el manejador de errorres
    handleHttpError(res, "ERROR_REGISTER_USER")
    console.log(e)
  }
};

/**
 * Este controlador es el encargado de logear a una persona
 * @param {*} req 
 * @param {*} res 
 */


//? Este controlador es el encaragdo de logear una persona
const loginCtrl = async (req, res) => {
  try{
    //? Limpiamos los datos aplicando machedData 
    req = matchedData(req);
    //? trae el correo y lo usa como metodo de logeo.
    const user = await userModel.findOne({email:req.email}).select('password name role email')

    //? Condición donde en caso de ser falso emplea el manejador de errores 
    if(!user){
      handleHttpError(res, "USER_NOT_EXISTS", 404);
      return
    }

    //? Extrae la contraseña en texto plano
    const hashPassword = user.get('password');
    //? validación de la contraseña en texto plano con la que ya se encripto
    const check = await compare(req.password, hashPassword)

    //? Condición donde en caso de ser falso se ejecuta emplea el manejador de errores
    if(!check){
      handleHttpError(res, "PASSWORD_INVALID", 401);
      return
    }

    //? Metodo para que NO aparezca en desntro de la data la contraseña por temas de seguridad
    user.set('password', undefined, {strict:false})
      

    //? Enviamos los datos para la creacion del token y lo concatenamos en el objeto con los datos del user
    const data = {
      token: await tokenSing(user),
      user
    }

    //?mostarmos la data como respuesta
    res.send({data})
  }catch(e){
    console.log(e)
    handleHttpError(res, "ERROR_LOGIN_USER")
  }
}


const confirmEmail = async (req, res) => {
  try{
    //? Obtener el Token
    const {token} = req.params;
    console.log('Token traido del email',token);

    //? Verificar la data
    const data = await decodeSign(token);
    console.log('DATA PRUBEA',data);

    if(data === null){
      handleHttpError(res, "ERROR_OBTENER_DATA");
    }

     //? Obtener email de la data
     const {email} = data;
     console.log('Juepuerca vida',email);

    //? Verificar existencia del usaurio.
    
    const user = await users.findOne({email}) || null;

    console.log('INFO_USER_BY_ID', user);

    if(user === null){
      handleHttpError(res, "USUERIO_NO_EXISTE");
    }

    //? verificar que el correo sea correcto.
    if(email !== user.email){
      handleHttpError(res, "ERROR_AL_VERIFICAR_EMAIL");
    }
    
    //? Actualizar User 
    user.status = 'VERIFIED'
    await user.save();

    //? redireccionar a la Confirmación
    return res.json({
      msg: 'EMAIL_VERIFICADO_CORRECTAMENTE'
    });

  }catch (e) {
    //? implementamos el manejador de errorres
    handleHttpError(res, "ERROR_CONFIRM_USER")
    console.log(e)
  }
}

//! Exportaciones
module.exports = {
  registerCtrl,
  loginCtrl,
  confirmEmail
};