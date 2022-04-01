const models ={
    registroModel: require('./nosql/registro'),
    registrosalidaModel: require('./nosql/regsalida'),
    storageModel: require('./nosql/storage'),
    userModel: require('./nosql/users'),
    perfilModel: require('./nosql/perfil')
}

//! exportamos rutas
module.exports = models