//* Importaciones 
const { matchedData } = require("express-validator");
const { encrypt, compare } = require("../utils/handlePassword");
const { tokenSing, decodeSign} = require("../utils/handleJwt");
const { handleHttpError } = require("../utils/handleError");
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

//? Ruta Azure para crear PersonGruopPerson
const endpoint = process.env.endpoint;

let credentials = new msRest.ApiKeyCredentials({ inHeader: { 'Ocp-Apim-Subscription-Key': key } });

let client = new Face.FaceClient(credentials, endpoint);

//? creamos funciones para register y login del usuario
//? Controlados de registro de usaurio en la DB.
const registerCtrl = async (req, res) => {
  try {
    //? Limpiamos los datos aplicando machedData  
    req = matchedData(req);

    //? Verificamos que el usuario exista.
    const user = await userModel.findOne({email:req.email}) || null;

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
      var userDa = await userModel.findById(data.user._id);
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
    const user = await userModel.findOne({email:req.email}).select('password name role email telefono documento status idImgPerfil')

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
    const data = await decodeSign(token);

    if(data === null){
      return res.status(401).json({
        msg: "ERROR_OBTENER_DATA"
      });
    }

    //? Obtener email de la data
    const {email} = data;

    //? Verificar existencia del usaurio.
    const user = await userModel.findOne({email}) || null;

    //? En caso de que el usuario no exista arroje un error  
    if(user === null){
      return res.status(404).json({
        msg: "USUARIO_NO_EXISTE"
      });
    }

    //? verificar que el correo sea correcto.
    if(email !== user.email){
      return res.status(404).json({
        msg: "ERROR_AL_VERIFICAR_EMAIL"
      });
    }
    
    //? Actualizar User 
    user.status = 'VERIFIED'
    await user.save();

    //? redireccionar a la Confirmación
    return res.status(200).json({
      msg: 'EMAIL_VERIFICADO_CORRECTAMENTE'
    });

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
      var mail = await userModel.findOne({email});
      
      if(mail == null){
        return res.status(404).json({msg: "No se encontro el usuario ingresado"})
      }
    } catch (e) {
      console.log(e);
      return res.status(404).json({msg: "No se encontro el usuario"})
    }

   //? Treamos la info del user dependiendo del email.
  const user = await users.findOne({email});
    
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
      var mail = await userModel.findOne({email});
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
      const users = await userModel.find({});

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
        var user = await userModel.findById({_id});
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
        var user = await userModel.findById({_id});
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
    console.log(_id);
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
    const datosUsu = await userModel.findById(req.params.id);

    //? integramos constante que buscara segun un id predeterminado
    res.send({ datosUsu });
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
    //const workbook =
    //console.log(file);
    //console.log(file.path);
    //? Creamos funcion con el proposito de leer el excel
    function excel(rutaex) {
      const workbook = Xlsx.readFile(rutaex);

      //? linea para establecer las hojas que poseemos en el excel
      const workbookSheets = workbook.SheetNames;

      //? Especificamos la hoja a leer
      const sheet = workbookSheets[0];

      //? Establecemos en que formato queremos la lectura
      var dataexcel = Xlsx.utils.sheet_to_json(workbook.Sheets[sheet]);


      //console.log(dataexcel);
      return dataexcel;
    };

    //? hacemos llamado a la funcion excel

    const daniel = excel(file.path);
    // console.log('Esto es importaten ', daniel);

    try {
      //? Gor pra extraer los usurios del array.
      for (var index = 0; index < daniel.length; index++) {
        // console.log('esto retorna',index);
        // console.log('Danielindex',daniel[index]);

        const password = await encrypt(daniel[index].password);
        // console.log('Contraselña encryptada',password);


        var body = {
          ...daniel[index],
          password
        }

        //? Crear usuarios en la base de datos
        var dataUser = await userModel.create(body);
        

        //?Creacion de tokens
        const token = await tokenSing(dataUser);
        //console.log(token);

        //? Obtenemos el template de Verif Email
        const template = getTemplate(dataUser.name, token);

        //? Enviar el Email.
        await sendEmail(dataUser.email, 'Confirma tu Correo', template);

        //? Obtenemos el template de Verif Email
        const templatecreacion = getTemplateEx(dataUser.name, dataUser.email, daniel[index].password);

        //? Enviar el Email.
        await sendEmail(dataUser.email, 'CREACION DE CUENTA', templatecreacion);

        //? Extraemos ID del usuario creado
        const id = dataUser._id;

        //! Peticion a Microsoft Azure para crear un person group person.
        let pablito = await client.personGroupPerson.create(GRUPO_PERSONAS_ID, {
          'name': id
        })
        .then((wFace) => {
          //? Enviamos por consola mensaje de creacion exitosa
          //console.log('Persona' + wFace.personId + 'a sido creada.')
          //console.log(wFace.personId);
          //? Retornamos la creacion 
          return wFace
        }) //?En caso de error me retorne un mensaje y el error que genera este fallo
        .catch((err) => {
          throw err
        })

        //? Extraemos el PersonId 
        const personId = pablito.personId;

        //? Generamos try catch para verificar que si nos traiga el id del usuario registrado 
        try {
          //? Guardamos el id del usuario 
          var userDa = await userModel.findById(dataUser._id);

          //? Insertamos el valor personId en el campo personId de la base de datos 
          userDa.personId = personId;
          //? Guardamos los cambios realizados 
          const userda = await userDa.save();

          console.log('miorar si sirve',userda);
          //? definimos codigo de repuesta de creacion satisfactoria

        } catch (e) {
          //? Mostramos el error
          console.log(e);
          return res.status(401).json({
            msg: "ID_NO_VALIDO"
          });
        }
      }

      res.status(200).json({
        msg: "CREADO CON EXITO"
      });
  
    } catch (error) {
      res.status(400).json({
        msg: "ERROR EN EL FOR"
      });
    }
  } catch (e) {
    console.log(e);
    return res.status(501).json({
      msg: "ERROR_DETALLE_ITEMS"
    });
  }
};

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
  createExcel
};