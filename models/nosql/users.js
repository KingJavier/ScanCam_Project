//* declaramos mongoose
const mongoose = require('mongoose');
//* Importamos mongooseDelete 
const mongooseDelete = require("mongoose-delete")

//? declaramos estructura 
const UserScheme = new mongoose.Schema(
    //? declaramos estructura de la tabla
    {
        //? establecemos cada uno de los datos que utilizaremos 
        name: {
            type: String
        },
        apellido: {
            type: String
        },
        telefono: {
            type: Number
        },
        documento: {
            type: Number
        },
        //? establecemos que email es string y unique con el fin de que no se repita
        email: {
            type: String,
            unique:true
        },
        password: {
            type: String,
            select:false
        },
        //? establecmos los roles y definimos que cuando se cree un usser aparezca por defecto Invitado
        role: {
            type: ['aprendiz', 'funcionario', 'gestor', 'seguridad', 'invitado'],
            default : 'invitado'
        },
        resetCode:{
            type:String,
            default: '',
        },
        status: {
            type: String,
            required: true,
            default: 'UNVERIFIED',
        },
        estado: {
            type: String,
            default: 'ACTIVO',
        },
        personId: {
            type: String,
            default: '',
        },
        idImgPerfil: {
            type: String,
            default: '',
        },
        idImgCertificado: {
            type: String,
            default: '',
        },
        idRegistro: {
            type: String,
            default: '',
        },
        stateEmail:{
            type:String,
            default:'UNDEFINED'
        },
        // stateAzure:{
        //     type:String,
        //     default:'UNDEFINED'
        // }
        
    },
    //? Registramos creacion y actualizacion
    {
        timestamps: true,
        versionKey: false
    }
);

//? Utilizamos el esquema de este documento para sobre escribir metodos
UserScheme.plugin(mongooseDelete,{ overrideMeethods:"all"});

//! Exportamos modelo de mongoose y mandamos 
module.exports = mongoose.model('Users', UserScheme);