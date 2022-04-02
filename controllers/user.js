//* Importaciones 
const { matchedData } = require("express-validator");
const { encrypt, compare } = require("../utils/handlePassword");
const { tokenSing, decodeSign} = require("../utils/handleJwt");
const { handleHttpError } = require("../utils/handleError");
const { userModel } = require("../models");
const users = require("../models/nosql/users")
const { getTemplate, sendEmail, getTemplateR} = require("../utils/handleMail");
const  _ = require('lodash');
const jwt = require("jsonwebtoken");


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


//? Este controlador es el encargado de logear una persona
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


//? Este controlador es el encargado de confirmar email
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

    //? Verificar existencia del usaurio.
    
    const user = await userModel.findOne({email}) || null;

    //console.log('INFO_USER_BY_ID', user);
    //? En caso de que el usuario no exista arroje un error  
    if(user === null){
      handleHttpError(res, "USUERIO_NO_EXISTE",404);
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


//? Este controlador es el encargado de enviar un email para restablecer password
const forgotPassword = async (req, res) => {
  try{
    //? traemos el email enviado en la request
    const {email} = req.body;

    //? Verificamos que el usuario exista.
    users.findOne({email}, (err, user) => {
      if(err || !user){
        return handleHttpError(res, "USER_ALREADY_NOT_EXIST")
      }
    })

    //? Treamos la info del user dependiendo del email.
    const user = await users.findOne({email});

    //? Creamos el token
    const token = await tokenSing(user);

    //? Obtenemos el template de VerifEmail
    const template = getTemplateR(token);

    //? Enviar el Email.
    await sendEmail(user.email, 'Olvido de Contraseña', template);

    //? Actualizar User 
    user.resetLink = `${token}`;
    await user.save();

    //? definimos codigo de repuesta de creacion satisfactoria
    res.status(201)
    // res.send('Correo enviado satisfactoriamente, sigue las instrucciones');
    return res.json({
      msg: 'Email enviado correctamente, sigue las instrucciones',
      token
    });

  }catch (e) {
    //? implementamos el manejador de errorres
    handleHttpError(res, "ERROR_SENDING_MAIL")
    console.log(e)
  }
}


//? Este controlador es el encargado de cambiar contraseña
const resetPassword = async (req, res) => {
  try{
    //? Establecemos constante donde almacenara el token del usuario  y la nueva contraseña
    const {resetLink, newPass} = req.body;


    //? Encriptacion de la contraseña traida del helper
    const password = await encrypt(newPass)

    //? ponemos condicion en caso de que encuentre el resetLink
    if(resetLink){

      //? Decodificar el token
      jwt.verify(resetLink, process.env.JWT_SECRET, function(err){
        //? condicion en caso de que no sea el token o que haya expirado
        if (err){
          //? retornamos un mensaje para el error anterior
          return handleHttpError(res, "ERROR_VERIF_TOKEN", 401)
        }

        //? realizamos una consulta con el resetLink hacia el usuario
        users.findOne({resetLink}, (e, user)=>{
           //? ponemos condicion en caso de que el noken no coincida con nigun usuario
          if(e || !user){
            //? mensaje en caso de que el usuario no coincida
            return handleHttpError(res, "USER_ALREADY_NOT_EXIST_WITH_THIS_TOKEN", 400)
          }

          //? guardamos nueva contraseña en una variable
          const obj ={
            password: password,
          }
          user=_.extend(user, obj);
          user.save((err)=>{
            if(err){
              //? generamos una respuesta en caso de error
              return handleHttpError(res, "ERROR_RESET_PASSWORD", 400)
            }else{
              //? mostramos mensaje en caso de exito en la operacion 
              return res.status(200).json({
                msg: 'Tu contraseña ha sido cambiada satisfactoriamente'
              });
            }
          })

        })
      })
    }else{
      return handleHttpError(res, "!!ERROR_AUTENTICATION!!", 401)
    }

  }catch (e) {
    //? implementamos el manejador de errorres
    handleHttpError(res, "ERROR_REGISTER_USER")
    console.log(e)
  }
}


//! Exportaciones
module.exports = {
  registerCtrl,
  loginCtrl,
  confirmEmail,
  forgotPassword,
  resetPassword
};