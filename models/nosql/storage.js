//* declaramos mongoose
const mongoose = require('mongoose');
//* Importamos mongooseDelete 
const mongooseDelete = require("mongoose-delete")

//? Declaramos estructura 
const StorageScheme = new mongoose.Schema(
    //? declaramos estructura de la tabla
    {
        //? Establecemos cada uno de los atributos que utilizaremos 
        url: {
            type: String
        },
        filename: {
            type: String
        },
        public_id: {
            type: String
        },
    },
    //? Registramos creacion y actualizacion
    {
        timestamps: true,
        versionKey: false
    }
);

//? Utilizamos el esquema de este documento para sobre escribir metodos
StorageScheme.plugin(mongooseDelete,{ overrideMeethods:"all"});

//! exportamos modelo de mongoose y enviamos el modelo a la DB
module.exports = mongoose.model('storage', StorageScheme)