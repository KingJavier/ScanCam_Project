const models ={
    registroModel: require('./nosql/registro'),
    registrosalidaModel: require('./nosql/regsalida'),
    storageModel: require('./nosql/storage'),
    fototempModel: require('./nosql/FotoTemp'),
    fototempsalModel: require('./nosql/FotoTempSal'),
    userModel: require('./nosql/users'),
    perfilModel: require('./nosql/perfil'),
    certificadoModel: require('./nosql/certificado')
}

//! exportamos rutas
module.exports = models