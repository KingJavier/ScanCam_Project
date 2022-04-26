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
const REFRESH_TOKEN="1//045glFYVtbXPiCgYIARAAGAQSNwF-L9Irrx5yqQoU1346T9ZSoBYlVjtAZYNVNMzVVd5ol2VFvhTKI6dArVQoExq4fpuc9e8BAoI"
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
    <div id="email_content" style="align-content: center; margin: 10px;">
        <img  style="width: 170px; height: 170px;" src="https://res.cloudinary.com/scancam/image/upload/v1650508060/logo_qkfylb.png" alt"ScanCam">
        <p>Recibimos una solicitud para confirmar su correo electrónico en <b>SCANCAM</b> Si esto es correcto, confirme haciendo clic en el botón a continuación. Si no sabe por qué recibió este correo electrónico omitalo.</p>
        </br>
        <p>Para confirmar da click 👇</p>
        <button><a href= "${back}/api/auth/confirm/${ token }" target="_blank">Confirmar Cuenta</a></button>
    </div>
    `;
}

//? Contenido del correco en formato HTML para reset_pasword
const getTemplateR = (numero) => {
    return `
    <div id="email_content">
        <img style="width: 170px; height: 170px;" src="https://res.cloudinary.com/scancam/image/upload/v1650508060/logo_qkfylb.png" alt"ScanCam">
        <p>Le hemos enviado este correo electrónico en respuesta a su solicitud de restablecer su contraseña para <b>SCANCAM</b>.</p>
        </br>
        <p>Código de verificación.</p>
        <h2>${numero}</h2>

        <p>Al dar click en el siguiente botón lo redireccionara a una vista en la cual encontrara los campos para digitar el código y la nueva contraseña para su cuenta</p>
        </br>
        <p>click en el siguiente enlace:</p>
        <p><a href="${front}/cambiocontrasena" target="_blank">Cambio de contraseña</a></p>
    </div>
    `;
}

const getTemplateEx = (name, email, password) => {
    return `

    <div id="email_content" style:"font-family: 'Quicksand', sans-serif;">
    <img style="width: 170px; height: 170px;" src="https://res.cloudinary.com/scancam/image/upload/v1650508060/logo_qkfylb.png" alt="ScanCam">
    <h4>Para:<strong>${ name }</strong></h4>
    </br>
    <p>Por medio del presente correo el centro de biotegnología agropecuaría Sena, se permite informarle al usuario ${name} que su cuenta Scamcan ha sido creada con los siguiente datos:</p>
    </br>
    <p><strong>Correo:</strong>${email}</p>
    <p><strong>Contraseña:</strong>${password}</p>
    </br>
    <p>Estimdo usuario, se solicita que ingrese a: ('Link') y actualize sus datos personales e inicie el entrenamiento facial: <p>
    </br>
    <p>Para ello dirijase a la seccion '<strog>Entrenamiento facial</strog>' e ingrese 5 fotografias(Se le especificara en el apartado como debe ingresar las fotografias) </p>
</div>
    `;
}

//!Exporatciones
module.exports = { sendEmail, getTemplate,getTemplateR, getTemplateEx };