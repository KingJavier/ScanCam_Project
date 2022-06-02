//* declaramos mongoose
const mongoose = require('mongoose');
//* Importamos mongooseDelete 
const mongooseDelete = require("mongoose-delete")
//? declaramos estructura 
const RegistroSalidaScheme = new mongoose.Schema(
    //? declaramos estructura de la tabla
    {
        //? establecemos cada uno de los atributos que utilizaremos 
        name: {
            type: String
        },
        apellido: {
            type: String
        },
        documento: {
            type: Number
        },
        //? establecemos que email es string y unique con el fin de que no se repita
        email: {
            type: String,
        },
        //? establecmos los roles y definimos que cuando se cree un usser aparezca por defecto Invitado
        role: {
            type: ['aprendiz', 'funcionario', 'gestor', 'seguridad', 'invitado'],
            default: 'invitado',
        },
        confirmacion:{
            type:Boolean
        },
    },
    //? Registramos creacion y actualizacion
    {
        timestamps: true,
        versionKey: false
    }
);

//?Utilizamos el esquema de este documento para sobre escribir metodos
RegistroSalidaScheme.plugin(mongooseDelete,{ overrideMeethods:"all"});

//! exportamos modelo de mongoose y ENviamos
module.exports = mongoose.model('registrosalida', RegistroSalidaScheme);