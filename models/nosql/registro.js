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
            type: ['aprendiz', 'funcionario', 'gestor', 'seguridad', 'invitado'],
            default: 'invitado',
        },
        confirmacion:{
            type:Boolean
        },
        idregent: {
            type: mongoose.Types.ObjectId,
        },

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
RegistroScheme.statics.findAllData = function () {
    const joinData = this.aggregate([
        {   
            $lookup: {
                from:"registrosalidas",
                localField:"idregent",
                foreignField: "_id",
                as: "regEnt",
            },
        }
    ]);
    return joinData; 

}


RegistroScheme.statics.findOneData = function (id) {
    const joinData = this.aggregate([
        {   
            $lookup: {
                from:"registrosalidas",
                localField:"idregent",
                foreignField: "_id",
                as: "regEnt",
            },
        },
        {
            $match:{
                _id:mongoose.Types.ObjectId(id)
            }
        }
    ]);
    return joinData; 

}

//?Utilizamos el esquema de este documento para sobre escribir metodos
RegistroScheme.plugin(mongooseDelete,{ overrideMeethods:"all"});

//! exportamos modelo de mongoose y ENviamos
module.exports = mongoose.model('registro', RegistroScheme);