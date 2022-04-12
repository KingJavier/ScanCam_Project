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
        imgid:{
            type: mongoose.Types.ObjectId
        }


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
RegistroSalidaScheme.statics.findAllData = function(){
    const joinData = this.aggregate ([
        {
            $lookup: {
                from:"storages",
                localField:"imgid",
                foreignField:"_id",
                as:"RgSalida",
                
            }
        },
        {
            $unwind:"$RgEntrada"
        }

    
    ])
    return joinData
};
RegistroSalidaScheme.statics.findOneData = function(id){
    const joinData = this.aggregate ([
        {
            $match:{
                _id:mongoose.Types.ObjectId(id)
            }
        },
        {
        // Creamos una realcion en la cual regsitro se relacion con el id 
        $lookup:{
            from:"storages",
            // viscamos campo a relacionar
            localField:"imgid",
            // Detemonamos un id
            foreignField:"_id",
            // Creamos un alias
            as:"RgEntrada"
        },
    },
        {
            $unwind:"$RgSalida"
        },
        

    ])
    console.log( joinData );
    return joinData
}


//?Utilizamos el esquema de este documento para sobre escribir metodos
RegistroSalidaScheme.plugin(mongooseDelete,{ overrideMeethods:"all"});

//! exportamos modelo de mongoose y ENviamos
module.exports = mongoose.model('registrosalida', RegistroSalidaScheme);