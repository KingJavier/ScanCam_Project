const models ={
    registroModel: require('./nosql/registro'),
    storageModel: require('./nosql/storage'),
    userModel: require('./nosql/users')
}

//! exportamos rutas
module.exports = models