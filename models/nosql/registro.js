//* declaramos mongoose
const mongoose = require('mongoose');
//* Importamos mongooseDelete 
const mongooseDelete = require("mongoose-delete")
//? declaramos estructura 
const RegistroScheme = new mongoose.Schema(
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
            type: ['aprenidz', 'funcionario', 'gestor', 'seguridad', 'invitado'],
            default: 'invitado',
        },
        confirmacion:{
            type:Boolean
        },
        //TODO imgid:{
        //TODO     type: mongoose.Types.ObjectId
        //TODO }


    },
    //? Registramos creacion y actualizacion
    {
        timestamps: true,
        versionKey: false
    }
);

/**
 * Implementar metodo propio  con  relacion a storage
 */

//?creamos metodo 
//TODO RegistroScheme.statics.findAllData = function(){
//TODO     const joinData = this.aggregate ([
//TODO         {
//TODO             $lookup: {
//TODO                 from:"storages",
//TODO                 localField:"imgid",
//TODO                 foreignField:"_id",
//TODO                 as:"RgEntrada",
                
//TODO             }
//TODO         },
//TODO         {
//TODO             $unwind:"$RgEntrada"
//TODO         }

    
//TODO     ])
//TODO     return joinData
//TODO };
//TODO RegistroScheme.statics.findOneData = function(id){
//TODO     const joinData = this.aggregate ([
//TODO         {
//TODO             $match:{
//TODO                 _id:mongoose.Types.ObjectId(id)
//TODO             }
//TODO         },
//TODO         {
//TODO         //? Creamos una realcion en la cual regsitro se relacion con el id 
//TODO         $lookup:{
//TODO             from:"storages",
//TODO             // viscamos campo a relacionar
//TODO             localField:"imgid",
//TODO             // Detemonamos un id
//TODO             foreignField:"_id",
//TODO             // Creamos un alias
//TODO             as:"RgEntrada"
//TODO         },
//TODO     },
//TODO         {
//TODO             $unwind:"$RgEntrada"
//TODO         },
        

//TODO     ])
//TODO     console.log( joinData );
//TODO     return joinData
//TODO }


//?Utilizamos el esquema de este documento para sobre escribir metodos
RegistroScheme.plugin(mongooseDelete,{ overrideMeethods:"all"});

//! exportamos modelo de mongoose y ENviamos
module.exports = mongoose.model('registro', RegistroScheme);