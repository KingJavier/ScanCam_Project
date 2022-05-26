//* Importaciones 
const { matchedData } = require("express-validator");
const { encrypt, compare } = require("../utils/handlePassword");
const { tokenSing, decodeSign} = require("../utils/handleJwt");
const { handleHttpError } = require("../utils/handleError");
const {verifyToken} = require('../utils/handleJwt')
const { userModel } = require("../models");
const users = require("../models/nosql/users")
const { getTemplate, sendEmail, getTemplateR, getTemplateEx} = require("../utils/handleMail");
const  _ = require('lodash');
const jwt = require("jsonwebtoken");
const axios = require('axios');
var msRest = require("@azure/ms-rest-js");
var Face = require("@azure/cognitiveservices-face");
const Xlsx = require('xlsx');


//? Ponemos el id del grupo de personas que vamos a crear 
var GRUPO_PERSONAS_ID = 'usuario';

//? Llave de Azure
const key =  process.env.key;

//? Direccion del front 
const front = process.env.URL_FRONT;

//? Ruta Azure para crear PersonGruopPerson
const endpoint = process.env.endpoint;
const subscriptionKey =  process.env.key;

let credentials = new msRest.ApiKeyCredentials({ inHeader: { 'Ocp-Apim-Subscription-Key': key } });

let client = new Face.FaceClient(credentials, endpoint);

//? creamos funciones para register y login del usuario
//? Controlados de registro de usaurio en la DB.
const registerCtrl = async (req, res) => {
  try {
    //? Limpiamos los datos aplicando machedData  
    req = matchedData(req);

    //? Verificamos que el usuario exista.
    const user = await userModel.findOne({email:req.email},{email:1}) || null;

    //? Condición donde en caso de ser falso emplea el manejador de errores 
    if( user!== null){
      return res.status(406).json({
        msg: "EMAIL_ALREADY_REGISTERED"
      }); 
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

    //? Extraemos ID del usuario creado
    const id = data.user._id;

    //! Peticion a Microsoft Azure para crear un person group person.
    let pablito = await client.personGroupPerson.create(GRUPO_PERSONAS_ID, { 'name': id })
        .then((wFace) => {
            //? Enviamos por consola mensaje de creacion exitosa
            //console.log('Persona' + wFace.personId + 'a sido creada.')
            //console.log(wFace.personId);
            //? Retornamos la creacion 
            return wFace
        })//?En caso de error me retorne un un mensaje y el error que genera este fallo
        .catch((err) => {
            throw err
        })

    //? Extraemos el PersonId 
    const personId = pablito.personId;

    //? Generamos try catch para verificar que si nos traiga el id del usuario registrado 
    try {
      //? Guardamos el id del usuario 
      var userDa = await userModel.findById(data.user._id , {createdAt:0, updatedAt:0, deleted:0, personId:0, idRegistro:0, stateEmail:0, resetCode:0, idImgCertificado:0});
    } catch (e) {
      //? Mostramos el error
      console.log(e);
      return res.status(401).json({
        msg: "ID_NO_VALIDO"
      });
    }

    //? Insertamos el valor personId en el campo personId de la base de datos 
    userDa.personId = personId;
    //? Guardamos los cambios realizados 
    await userDa.save();
    
    //? Generamos una variable donde generaremos un token de los cambios realizados anteriormente
    const data2 = {
      token: await tokenSing(dataUser),
      user: userDa
    }

    //? definimos codigo de repuesta de creacion satisfactoria
    res.status(201)
    res.send({data2});
    
  } catch (e) {
    console.log(e)
    //? implementamos el manejador de errorres
    return res.status(404).json({
      msg: "ERROR_REGISTER_USER"
    });
  }
};

//? Este controlador es el encargado de logear una persona
const loginCtrl = async (req, res) => {
  try{
    //? Limpiamos los datos aplicando machedData 
    req = matchedData(req);
    //? trae el correo y lo usa como metodo de logeo.
    const user = await userModel.findOne({email:req.email}).select('password name apellido role email telefono documento status idImgPerfil')

    //? Condición donde en caso de ser falso emplea el manejador de errores 
    if(!user){
      return res.status(404).json({
        msg: "USER_NOT_EXISTS"
      });
    }

    //? Extrae la contraseña en texto plano
    const hashPassword = user.get('password');
    //? validación de la contraseña en texto plano con la que ya se encripto
    const check = await compare(req.password, hashPassword)

    //? Condición donde en caso de ser falso se ejecuta emplea el manejador de errores
    if(!check){
      return res.status(401).json({
        msg: "PASSWORD_INVALID"
      });
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
    return res.status(404).json({
      msg: "ERROR_LOGIN_USER"
    });
  }
}

//? Este controlador es el encargado de confirmar email
const confirmEmail = async (req, res) => {
  try{
    //? Obtener el Token
    const {token} = req.params;

    //? Verificar la data
    const data = decodeSign(token);

    if(data === null){
      return res.status(401).redirect(front + "/#" + "/correoverifierror");
    }

    //? Obtener email de la data
    const {email} = data;

    //? Verificar existencia del usaurio.
    const user = await userModel.findOne({email}, {email:1, status:1}) || null;

    //? En caso de que el usuario no exista arroje un error  
    if(user === null){
      return res.status(404).redirect(front + "/#" + "/correoverifierror");
    }

    //? verificar que el correo sea correcto.
    if(email !== user.email){
      return res.status(404).redirect(front + "/#" + "/correoverifierror");
    }
    
    //? Actualizar User 
    user.status = 'VERIFIED'
    await user.save();

    //? redireccionar a la Confirmación
    return res.status(200).redirect(front + "/#" + "/correoverifiexito");

  }catch (e) {
    //? implementamos el manejador de errorres
    console.log(e)
    return res.status(401).json({
      msg: "ERROR_CONFIRM_USER"
    });
  }
}

const renviarverfi = async (req, res) => {
  try{
    //? traemos el emial enviado en la request
    const {email} = req.body;

    //? Verificamos que el usuario exista.
    if(!(email)){
      return res.status(400).json({msg: 'Email is required'});
    }

    try {
      var mail = await userModel.findOne({email},{email:1});
      
      if(mail == null){
        return res.status(404).json({msg: "No se encontro el usuario ingresado"})
      }
    } catch (e) {
      console.log(e);
      return res.status(404).json({msg: "No se encontro el usuario"})
    }

   //? Treamos la info del user dependiendo del email.
    const user = await users.findOne({email},{role:1, email:1, name:1});
      
    //? Creamos el token
    const token = await tokenSing(user);
    
    //? Obtenemos el template de Verif Email
    const template = getTemplate(user.name, token);
    //? Enviar el Email.
    await sendEmail(user.email, 'Confirma tu Correo', template);

    return res.status(200).json({
      msg: 'Correo enviado satisfactoriamente, sigue las instrucciones',
    });
  }catch (e) {
    //? implementamos el manejador de errorres
    console.log(e)
    return res.status(401).json({
      msg: "ERROR_SENDING_MAIL"
    });
  }
};

//? Este controlador es el encargado de enviar un email para restablecer password
const forgotPassword = async (req, res) => {
  try{
    //? traemos el emial enviado en la request
    const {email} = req.body;

    //? Verificamos que el usuario exista.
    if(!(email)){
      return res.status(400).json({msg: 'Email is required'});
    }

    try {
      var mail = await userModel.findOne({email},{email:1});
      if(mail == null){
        return res.status(404).json({msg: "No se encontro el usuario ingresado"})
      }
    } catch (e) {
      console.log(e);
      return res.status(404).json({msg: "No se encontro el usuario"})
    }

    //? Treamos la info del user dependiendo del email.
    const user = await users.findOne({email});

    //? Creamos un numero aleatorio el
    const numero = Math.floor(Math.random() * (999999 - 100000)) + 100000;

    //? Obtenemos el template de VerifEmail
    const template = getTemplateR(numero);

    //? Enviar el Email.
    await sendEmail(user.email, 'Olvido de Contraseña', template);

    //? Actualizar User 
    user.resetCode = numero;
    await user.save();

    //? definimos codigo de repuesta de creacion satisfactoria
    return res.status(200).json({
      msg: 'Correo enviado satisfactoriamente, sigue las instrucciones'
    });
  }catch (e) {
    //? implementamos el manejador de errorres
    console.log(e)
    return res.status(401).json({
      msg: "ERROR_SENDING_MAIL"
    });
  }
}

//? Este controlador es el encargado de cambiar contraseña
const resetPassword = async (req, res) => {
  try{
    //? Establecemos constante donde almacenara el token del usuario  y la nueva contraseña
    const {resetCode, newPass} = req.body;

    //? Encriptacion de la contraseña traida del helper
    const password = await encrypt(newPass)

    //? ponemos condicion en caso de que encuentre el resetLink
    if(resetCode){
        //? realizamos una consulta con el resetCode hacia el usuario
        users.findOne({resetCode}, (e, user)=>{
           //? ponemos condicion en caso de que el noken no coincida con nigun usuario
          if(e || !user){
            //? mensaje en caso de que el usuario no coincida
            return res.status(400).json({
              msg: "USER_ALREADY_NOT_EXIST_WITH_THIS_CODE"
            });
          }
          //? guardamos nueva contraseña en una variable
          const obj ={
            password: password,
            resetCode: ''
          }
          user=_.extend(user, obj);
          user.save((err)=>{
            if(err){
              //? generamos una respuesta en caso de error
              return res.json({
                msg: "ERROR_RESET_PASSWORD"
              });
            }else{
              //? mostramos mensaje en caso de exito en la operacion 
              return res.status(200).json({
                msg: 'Tu contraseña ha sido cambiada satisfactoriamente'
              });
            }
          })
        })
      }else{
      return res.status(500).json({
        msg: "!!ERROR_AUTENTICATION!!"
      });
    }

  }catch (e) {
    //? implementamos el manejador de errorres
    console.log(e)
    return res.status(409).json({
        msg: "ERROR_REGISTER_USER"
    });
  }
}

//? método para obtener Lista de los usuarios.
const getUsers = async (req, res) => {
  try {

    try {
      //? integramos constante que buscara diversos datos
      const users = await userModel.find({},{createdAt:0, updatedAt:0, deleted:0, personId:0, idRegistro:0, stateEmail:0, resetCode:0, idImgCertificado:0});

      return res.send({ users });

    } catch (e) {
      //? implementamos el manejador de errorres
      console.log(e)
      return res.status(400).json({
        msg: "ERROR_LIST_USERS"
      });
    }
    
  } catch (e) {
    //? implementamos el manejador de errorres
    console.log(e)
    return res.status(400).json({
      msg: "ERROR_LIST_USERS"
    });
  }
};

//? método para inhabilitar usuarios.
const desactivarUser = async (req, res) => {
  try {
    
    try {
      //? Filtramos el id de la req
      const {id} = req.params;
      const _id = id;

      //? Verificar existencia del usaurio.
      //? En caso de que el usuario no exista arroje un error  
      try {
        var user = await userModel.findById({_id},{estado:1});
      } catch (e) {
        console.log(e)
        return res.status(404).json({
          msg: "ID_NO_VALIDO"
        });
      }

      //? verificación de en que estado esta el usaurio.
      if(user.estado == 'DESHABILITADO'){
        return res.status(100).json({
          msg: "USUARIO_YA_DESHABILITADO"
        });
      };
      
      //? Actualizar User 
      user.estado = 'DESHABILITADO';
      await user.save();

      //? retornamos mensaje de acción
      return res.status(200).send({ msg: 'USUARIO_DESHABILITADO_CON_EXITO' });
    } catch (e) {
      console.log(e)
      return res.status(500).json({
        msg: "ERROR_DESHABILITANDO"
      });
    }

  } catch (e) {
    //? implementamos el manejador de errorres
    console.log(e)
    return res.status(500).json({
      msg: "ERROR_DESHABILITANDO"
    });
  }
};

//? metodo para activar usuarios.
const activarUser = async (req, res) => {
  try {
    try {
      //? Filtramos el id de la req
      const {id} = req.params;
      const _id = id;

      //? Verificar existencia del usaurio.
      //? En caso de que el usuario no exista arroje un error  
      try {
        var user = await userModel.findById({_id},{estado:1});
      } catch (error) {
        return res.status(404).json({
          msg: "ID_NO_VALIDO"
        });
      }

      //? verificación de en que estado esta el usaurio.
      if(user.estado == 'ACTIVO'){
        return res.status(100).json({
          msg: "USUARIO_YA_ACTIVO"
        });
      };
      
      //? Actualizar User 
      user.estado = 'ACTIVO';
      await user.save();

      //console.log("Ya se desabilito");
      //? retornamos mensaje de acción
      return res.send({ msg: 'USUARIO_ACTIVO_CON_EXITO' });
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        msg: "ERROR_DESHABILITANDO"
      });
    }
  } catch (e) {
    console.log(e)
    //? implementamos el manejador de errorres
    return res.status(500).json({
      msg: "ERROR_ACTIVANDO_USUARIO"
    });
  }
};

//? Metodo para actualizar el rol del usuario
const actualizarRol = async (req, res) => {
  try{
    //? Filtramos el id y se alamacena en {id}.
    const {id} = req.params;
    const {role} = req.body;
    const _id = id;
    //? Verificar existencia del usaurio.
    //? En caso de que el usuario no exista arroje un error  
    try {
      var user = await userModel.findById({_id});
    } catch (err) {
      console.log(err);
      return res.status(404).json({
        msg: "ID_NO_VALIDO"
      });
    }
    //? actualizamos dato en la DB dependiendo el ID recibido y lo almacenamso en data
    const data = await userModel.findByIdAndUpdate(
      req.params.id, {role}
    );
    const datosUsu = await userModel.findById(req.params.id, {email:1, role:1});

    //? integramos constante que buscara segun un id predeterminado
    res.status(200).send({ datosUsu });
  } catch (e) {
    console.log(e)
    //? implementamos el manejador de errorres
    return res.status(501).json({
      msg: "ERROR_DETALLE_ITEMS"
    });
  }
};

//? Trear el archivo de excel para logueo usuarios
const createExcel = async (req, res) => {
  try {
    //?  Almacenamos en una constante el file
    const {
      file
    } = req;

    //? Creamos funcion con el proposito de leer el excel
    function excel(rutaex) {
      const workbook = Xlsx.readFile(rutaex);

      //? linea para establecer las hojas que poseemos en el excel
      const workbookSheets = workbook.SheetNames;

      //? Especificamos la hoja a leer
      const sheet = workbookSheets[0];

      //? Establecemos en que formato queremos la lectura
      var dataexcel = Xlsx.utils.sheet_to_json(workbook.Sheets[sheet]);

      //? Retornamos el json. 
      return dataexcel;
    };

    //? hacemos llamado a la funcion excel
    const daniel = excel(file.path);
    
    // ? For para extraer los usurios del array.
    for (var index = 0; index < daniel.length; index++) {
      //? Alamacenamos la clave con la cual se esta creando el 
      var passwordEx = (daniel[index].password);
      //? Encriptamos la contraseña.
      var password = await encrypt(daniel[index].password);
      // console.log('verficar contraseña',contraseña);
      var body = {
        ...daniel[index],
        password
      }

      const danieivan0 = daniel[index].email
      const verEmail = await userModel.findOne({"email":daniel[index].email},{email:1})

      name(verEmail);

      async function name(hola) {
        if(hola == null){
          //? Crear usuarios en la base de datos
          //console.log('AUN NO EXISTE');
          var dataUser = await userModel.create(body);

          //? Extraemos ID del usuario creado
          const id = dataUser._id;

          //! Peticion a Microsoft Azure para crear un person group person.
          let pablito = await client.personGroupPerson.create(GRUPO_PERSONAS_ID, { 'name': id })
              .then((wFace) => {
                  //? Enviamos por consola mensaje de creacion exitosa
                  //console.log('Persona' + wFace.personId + 'a sido creada.')
                  //console.log(wFace.personId);
                  //? Retornamos la creacion 
                  return wFace
              })//?En caso de error me retorne un un mensaje y el error que genera este fallo
              .catch((err) => {
                  throw err
              })
              
          //? Extraemos el PersonId 
          const personId = pablito.personId;

          //? Generamos try catch para verificar que si nos traiga el id del usuario registrado 
          try {
            //? Guardamos el id del usuario 
            var userDa = await userModel.findById(id);
          } catch (e) {
            //? Mostramos el error
            console.log(e);
            return res.status(401).json({
              msg: "ID_NO_VALIDO"
            });
          }

          //? Insertamos el valor personId en el campo personId de la base de datos 
          userDa.personId = personId;
          //? Guardamos los cambios realizados 
          await userDa.save();

        }else if(hola.email == danieivan0){
          console.log('YA EXISTE');
        }else{
          console.log("ESTAMOS EN LA INMUNDA");
        }
      }
    }

    //? Traesmos todos los usuarios de la base de datos 
    const email = await userModel.find({"stateEmail": "UNDEFINED"},{email:1, stateEmail:1},);

    //? extraemos el estado de verificacion de cada usaurio

    for (let index = 0; index < email.length; index++) {
      const element = email[index];
      const verifiid = email[index]._id;

      const stateEmail = element.stateEmail;
      
      if (stateEmail === 'UNDEFINED') {
        const noverif = await userModel.findById(verifiid, {email:1, name:1, stateEmail:1});

        //console.log(noverif);

        //?Creacion de tokens
        const token = await tokenSing(noverif);
        //console.log(token);

        //? Extraemos el nombre del usuario al que se le va enviar el correo
        const nombre = noverif.name;

        //? Extraemos el nombre del usuario que se va enviar al correo
        const email = noverif.email;

        //? Obtenemos el template de Verif Email
        const templatecreacion = getTemplateEx(nombre, email ,passwordEx);
        
        //? Enviar el Email.
        await sendEmail(email, 'CREACION DE CUENTA', templatecreacion);

        //? Actualizar User 
        noverif.stateEmail = 'DEFINIDO'
        await noverif.save();
      }
    }

    res.status(200).json({
      msg: "CREADO CON EXITO"
    });

  } catch (e) {
    console.log(e);
    return res.status(501).json({
      msg: "ERROR_DETALLE_ITEMS"
    });
  }
};

//? método para obtener Lista de los usuarios.
const numerorostros= async (req, res) => {

  const token =req.headers.authorization.split(' ').pop();

  try {

    try {
      //? verificamos la data del token
      const dataToken = await verifyToken(token) 
      //? indicamos condicion en caso de que no exista
      if (!dataToken._id) {
          return res.json({
              msg: "ERROR_ID_TOKEN"
          });
      }
      //? Creamos consulta a la db para traer datos del user
      var  user = await userModel.findById(dataToken._id, {personId:1});
      //console.log(ruta);
    } catch (e) {
      console.log(e);
      return res.status(404).json({
        msg: "ERROR_TOKEN"
      });
    }
    
    try {
      const ruta = process.env.endpoint + "/face/v1.0/persongroups/usuario/persons/" + user.personId;

      //! Integramos el reconocimiento facial de la api de microsoft azure por medio de axios
      axios({
        //? Establecemos especificaciones generales para el reconocimiento
        method: 'get',
        url: ruta,
        headers: { 'Ocp-Apim-Subscription-Key': subscriptionKey }
      }).then(function(response) {
          //? Buscamos mensaje luego de la ejecucion 
          //console.log('Status text: ' + response.status)
          //console.log('Status text: ' + response.statusText)
          //console.log(response.data)

          const persistedFaceIds = response.data.persistedFaceIds.length;

          res.status(200).json(
            persistedFaceIds
          )
    
      }).catch( function (error) {
          //? En caso de error mostrar 
          console.log(error);
          return res.send("ERROR TRAYENDO ")
      });

    } catch (e) {
      console.log(e);
      return res.status(500).json({
        msg: "ERROR_AXIOS_NO_SE_ENCONTRO_PERSON_ID"
      });
    }

  } catch (e) {
    console.log(e);
    res.status(400).json({
      msg: "ERROR"
    });
  }

};

//? método para obtener Lista de los usuarios.
const rolctrl = async (req, res) => {

  const user = req
  try {
    

  } catch (e) {
    console.log(e);
    res.status(400).json({
      msg: "ERROR"
    });
  }

};

//? Metodo para verificar el estado del token del usuario
const checkToken = async(req,res,next) =>{
    //? Condicion 
    try{        
        if (!req.headers.authorization) {
            return res.json({
                msg: 'NOT_TOKEN'
            });
        }
        const token =req.headers.authorization.split(' ').pop();
        // verificamos la data del token
        const dataToken = await verifyToken(token) 
        // indicamos condicion en caso de que no exista
        if (dataToken === null) {
            return res.json({
                msg: "TOKEN_NULO"
            });
        }else{
          return res.json({
            msg: "TOKEN_VALIDO"
          });
        }
        
    }catch(e){
      console.log(e);
      return res.json({
          msg: "ERROR_SESSION_TOKEN"
      });
    }
}

//! Exportaciones
module.exports = {
  registerCtrl,
  loginCtrl,
  confirmEmail,
  forgotPassword,
  resetPassword,
  getUsers,
  desactivarUser,
  activarUser,
  actualizarRol,
  renviarverfi,
  createExcel,
  numerorostros,
  checkToken,
  rolctrl
};