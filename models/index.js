const models ={
    registroModel: require('./nosql/registro'),
    storageModel: require('./nosql/storage'),
    userModel: require('./nosql/users'),
    perfilModel: require('./nosql/perfil')
}

//! exportamos rutas
module.exports = models