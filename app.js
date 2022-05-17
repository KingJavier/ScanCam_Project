//* Agregamos importacion para utilizar todas las variables de entorno
require("dotenv").config()
//* Importamos y guardamos express, Cors en una variable
const express = require('express')
const cors = require('cors')

//* Importamos conexion de mongo
const dbConect = require('./config/mongo')
//* Importaciones de morgan
const morganBody = require("morgan-body")

//!---------------------------------------------------------------------------------------------------------
//* Importamos http para creación de un nuevo servidor
const http = require('http');
//* Inicializamos socket.io
const {Server} = require('socket.io');
//* Importamos helper donde se ejecutaran los sockets
const {sockets} = require('./utils/handleSockets');

//!---------------------------------------------------------------------------------------------------------

//? estraemos los metodos de express y los asignamos a una constante
const app = express();

//!---------------------------------------------------------------------------------------------------------

//? Creación de servidor
const server = http.createServer(app);

//? utilizamos puerto establecido en .env o el puerto 3000
const port = process.env.PORT || 3000 || 3100

//? Definimos el puerto por el qeu sera escucha la api
const httpServer = server.listen(port,() => {
    console.log(`Server en el puerto http://localhost:${port}`);
});

//? Creación de servidor de Socket io
const io = new Server(httpServer);

//? pasamos las funcionalidades de socket.io a el helperSocket
sockets(io);

//!---------------------------------------------------------------------------------------------------------

//? utilizamos cors
app.use(cors())

//? preparamos para que reciba informacion en formato json
app.use(express.json({limit: '200mb'}));
app.use(express.urlencoded({limit: '200mb', extended: true}));

//? hacemos publicos algunos datos 
app.use(express.static('storage'));

app.use((req, res, next) => {
    
    //? Metodos de solicitud que deseas permitir
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

    next();
})


//? Utiliza morgan para Eliminar el color de la ventana de comandos, ademas de que solo mande a Slack todas las peticienes que se consideren errores que s
//! morganBody(app,{
//!     noColors:true,
//!     stream: loggerStream,
//!     skip: function(req, res){
//!         return res.statusCode < 400 
//!     }
//! })


/**
 * Aquí invicamos a las rutas! 😎
 */
// TODO http://localhost/api/ ____
app.use("/api",require('./routes'))


// Invocamos la conexion de db
dbConect()