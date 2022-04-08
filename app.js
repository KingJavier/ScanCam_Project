//* Agregamos importacion para utilizar todas las variables de entorno
require("dotenv").config()
//* Importamos y guardamos express, Cors en una variable
const express = require('express')
const cors = require('cors')

//* Importamos conexion de mongo
const dbConect = require('./config/mongo')
//*Importamos el helper
const loggerStream = require("./utils/handleLogger")
//* Importaciones de morgan
const morganBody = require("morgan-body")


//? estraemos los metodos de express y los asignamos a una constante
const app = express();

//? utilizamos cors
app.use(cors())

//? preparamos para que reciba informacion en formato json
app.use(express.json())

//? hacemos publicos algunos datos 
app.use(express.static('storage'))

app.use((req, res, next) => {
    
    //? Metodos de solicitud que deseas permitir
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

    next();
})


//? Utiliza morgan para Eliminar el color de la ventana de comandos, ademas de que solo mande a Slack todas las peticienes que se consideren errores que s
morganBody(app,{
    noColors:true,
    stream: loggerStream,
    skip: function(req, res){
        return res.statusCode < 400 
    }
})

//? utilizamos puerto establecido en .env o el puerto 3000
const port = process.env.PORT || 3000 || 3100


/**
 * Aquí invicamos a las rutas! 😎
 */

// TODO http://localhost/api/ ____
app.use("/api",require('./routes'))

app.listen(port,() => {
    console.log(`Server en el puerto http://localhost:${port}`);
});

// Invocamos la conexion de db
dbConect()

