 //* Importamos nodemailer

const nodemailer = require('nodemailer');

 
//? Definimos el correo y la contraseña del Mail desde el cual se remitira la verificación.

const mail = {
    user: 'scancamsena@gmail.com',
    pass: 'elmejorequipo',
}

//? Configiración NodeMailer

let transporter = nodemailer.createTransport({
    //? Host de Gmail
    host: "smtp.gmail.com",
    //? Puerto de Gmail
    port: 25,
    tls: {
        rejectUnauthorized: false
    },
    secure: false, 
    auth: {
      user: mail.user, //? Correo del Email remitante
      pass: mail.pass, //? Contraseña del Email.
    },
  });

//? Construcción de parametros enviados al correo a verificar

//? Se recibe como parametros el corrreo del User, el asunto y el contenido del correo.
const sendEmail = async (email, subject, html) => {
      try{
        await transporter.sendMail({
            from: ` ScanCam < ${ mail.user } >`, 
            to: email, 
            subject, 
            text: "Hola querido Usuario, por favor verifica tu correo para ScanCam", 
            html, 
          });
      }catch(e){
          console.log('Algo no va bien con el email', e);
      }
  }

//? Contenido del correo en formato HTML.
const getTemplate = (name, token) => {
    return `
    <head>
        <link rel="stylesheet" href="./style.css">
    <head>

    <div id="email_content">
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiPTda2MMSGauFT8i-tj7Hi5RSt2wHF3Ac2t0A9haWOOBU8Lq1vpmyu1CfCu3HZKCS7VIiuVsvHs8WLEKFq7uEGK9L5oweqJvTYyWfQbQuX-2Uc95hYgWERQ4rtoRugxvsjnHhqG5nZWETM1imSWUma9FXicLrDfOmNyxtp3Ks5WCFqqAutxMf1N9zMLw/s320/logo.png" alt"ScanCam">
        <h2>Hola ${ name }</h2>
        <p>Para confirmar tu cuenta, Ingresa al siguiente enlace</p>
        <a href="https://apiscancam01.herokuapp.com/api/auth/confirm/${ token }" target="_blank">Confirmar Cuenta</a>
    </div>
    `;
}

//? Contenido del correco en formato HTML para reset_pasword
const getTemplateR = (token) => {
    return `
    <head>
        <link rel="stylesheet" href="./style.css">
    <head>

    <div id="email_content">
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiPTda2MMSGauFT8i-tj7Hi5RSt2wHF3Ac2t0A9haWOOBU8Lq1vpmyu1CfCu3HZKCS7VIiuVsvHs8WLEKFq7uEGK9L5oweqJvTYyWfQbQuX-2Uc95hYgWERQ4rtoRugxvsjnHhqG5nZWETM1imSWUma9FXicLrDfOmNyxtp3Ks5WCFqqAutxMf1N9zMLw/s320/logo.png" alt"ScanCam">
        
        <p>Para recuperar tu contraseña, Ingresa al siguiente enlace</p>
        <a href="https://apiscancam01.herokuapp.com/api/auth/forgot_password/${ token }" target="_blank">Recupera tu contraseña</a>
    </div>
    `;
}
//!Exporatciones
module.exports = { sendEmail, getTemplate,getTemplateR};