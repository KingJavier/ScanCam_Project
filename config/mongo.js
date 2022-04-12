//* Impostarmos mongoose
const mongoose= require('mongoose');

//? declaramos funcion para la conexion a base de datos
const dbConect =() =>{

    //? Utilizamos DB_URI del archivo en '.env'
    const DB_URI= process.env.DB_URI;

        //? Creamos conexion por medio de mongoose a la base de datos
        mongoose.connect(
            DB_URI,{
                useNewUrlParser:true,
                useUnifiedTopology:true,
            },

        //? creamos if para validar la conexion) 
        (err,res)=>{
            //? If para verificar si la cenexion fue correcta o erronea
            if(!err){
                console.log('++++ CONECTADO ++++')
            }else{
                console.log('++++ ERROR CONEXION ++++')
            }
        }

    );
};

//! Creamos exportacion de funcion
module.exports = dbConect;