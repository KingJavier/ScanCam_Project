 //* Importamos nodemailer
const nodemailer = require('nodemailer');
const {google} = require("googleapis");

//? Configiración NodeMailer
const CLIENT_ID="180701275743-u889fh71ufdkl0lindve2b0iko4ubjrg.apps.googleusercontent.com"
const CLIENT_SECRET="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"
const REDIRECT_URI="https://developers.google.com/oauthplayground"
const REFRESH_TOKEN="1//04Ds20_lRKvUICgYIARAAGAQSNwF-L9IrNpTpEHoFhxN2XIm5Z8_yuGw1ZR3Znsj0WyLSLO0_YhIHCWwcRWwgov85vQU0GRUwQuc"
const oAuth2Client= new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

oAuth2Client.setCredentials({refresh_token: REFRESH_TOKEN});

//? Construcción de parametros enviados al correo a verificar
//? Se recibe como parametros el corrreo del User, el asunto y el contenido del correo.
const sendEmail = async (email, subject, html) => {
    try{

        const accessToken = await oAuth2Client.getAccessToken()

        const transporter = nodemailer.createTransport({
            service:"gmail",
            auth:{
                type:"OAuth2",
                user:"scancamsena@gmail.com",
                clientId:CLIENT_ID,
                clientSecret:CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        await transporter.sendMail({
            from: ` ScanCam <scancamsenafggd@gmail.com>`, 
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