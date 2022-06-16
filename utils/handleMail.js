 //* Importamos nodemailer
const nodemailer = require('nodemailer');
const {google} = require("googleapis");

//? Direccion del front 
const front = process.env.URL_FRONT;

//? Dirección del Heroku
const back = process.env.PUBLIC_URL;

//? Configiración NodeMailer
const CLIENT_ID="180701275743-u889fh71ufdkl0lindve2b0iko4ubjrg.apps.googleusercontent.com"
const CLIENT_SECRET="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"
const REDIRECT_URI="https://developers.google.com/oauthplayground"
const REFRESH_TOKEN="1//04ER59yS0xKSXCgYIARAAGAQSNwF-L9IrwVc6cHp0ZWUZzjKB4_5_4tbS_RbqjPofZIq_rCjM01LxQ3pnxX8IvzlrnesJHuOzaLQ"
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
            from: ` ScanCam <scancamsena@gmail.com>`, 
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
        <div id="email_content" style="display: grid; grid-template-columns: repeat(6, 1fr); grid-gap: 10px; grid-auto-rows: minmax(30px, auto);" >
            <div class="div1" style="grid-column: 1; grid-row: 1 / 10 ; margin-left: 30px; margin-bottom: 50px;">
                <img style="width: 170px; height: 170px;" src="https://res.cloudinary.com/scancam/image/upload/v1650508060/logo_qkfylb.png" alt="ScanCam">
            </div>
            <div class="div2" style="grid-column: 2 / 6; grid-row: 1 / 10;">
                <p>Recibimos una solicitud para confirmar su correo electrónico en <b>SCANCAM</b> Si esto es correcto, confirme haciendo clic en el botón a continuación. Si no sabe por qué recibió este correo electrónico omitalo.</p>
                </br>
                <p>Para confirmar da click 👇</p>
                <p><a href="${back}/api/auth/confirm/${ token }">Confirmar Cuenta</a></p>
            </div>
        </div>
    `;
}

//? Contenido del correco en formato HTML para reset_pasword
const getTemplateR = (numero) => {
    return `
        <div id="email_content" style="display: grid; grid-template-columns: repeat(6, 1fr); grid-gap: 10px; grid-auto-rows: minmax(30px, auto);" >
            <div class="div1" style="grid-column: 1; grid-row: 2 / 10 ; margin-left: 30px; margin-bottom: 50px;">
                <img style="width: 170px; height: 170px;" src="https://res.cloudinary.com/scancam/image/upload/v1650508060/logo_qkfylb.png" alt="ScanCam">
            </div>
            <div class="div2" style="grid-column: 2 / 6; grid-row: 1 / 10;">
                <p>Le hemos enviado este correo electrónico en respuesta a su solicitud de restablecer su contraseña para <b>SCANCAM</b>.</p>
                
                <p>Código de verificación.</p>
                <h2>${numero}</h2>

                <p>Al dar click en el siguiente botón lo redireccionara a una vista en la cual encontrara los campos para digitar el código y la nueva contraseña para su cuenta</p>
                </br>
                <p>click en el siguiente enlace:</p>
                <p><a href="${front}/#/cambiocontrasena">Cambio de contraseña</a></p>
            </div>
        </div>
    `;
}

const getTemplateEx = (name, email, password) => {
    return `
        <div id="email_content" style="display: grid; grid-template-columns: repeat(6, 1fr); grid-gap: 10px; grid-auto-rows: minmax(30px, auto);" >
            <div class="div1" style="grid-column: 1; grid-row: 2 / 10 ; margin-left: 30px; margin-bottom: 50px;">
                <img style="width: 170px; height: 170px;" src="https://res.cloudinary.com/scancam/image/upload/v1650508060/logo_qkfylb.png" alt="ScanCam">
            </div>
            <br class="div2" style="grid-column: 2 / 6; grid-row: 1 / 10;">
                <h4>Para:<strong>${ name }</strong></h4>
                </br>
                <p>Por medio del presente correo el centro de biotegnología agropecuaría Sena, se permite informarle al usuario ${name} que su cuenta Scamcan ha sido creada con los siguiente datos:</p>
                
                <p><strong>Correo:</strong>${email}</p>
                <p><strong>Contraseña:</strong>${password}</p>
                
                <p>Estimdo usuario, se solicita que ingrese a: <a href="${front}">App Scan Cam</a> y actualize sus datos personales e inicie el entrenamiento facial: <p>
                
                <p>Para ello dirijase a la seccion '<strog>Entrenamiento facial</strog>' e ingrese 5 fotografias(Se le especificara en el apartado como debe ingresar las fotografias) </p>
            </div>
        </div>
    `;
}

//!Exporatciones
module.exports = { sendEmail, getTemplate,getTemplateR, getTemplateEx };