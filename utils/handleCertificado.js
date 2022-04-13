//* importamos multer que nos ayudara a alamacenar archivos.
const multer = require("multer");

//? creamos haciendo referencia al disco de almacenamiento 
const storage = multer.diskStorage({

    //? creamos un destino de guardado 
    destination: function (req, file, cb) {
        cb(null, `${__dirname}/../certificado`);
    },
    

    //? Asignar un nombre unico al archivo sin importar cual sea el nombre del archivo recibido 
    filename: function (req, file, cb) {
        const ext = file.originalname.split('.').pop()
        const filename = `file-${Date.now()}.${ext}`
        cb(null, filename);
    },

});

//? Utilizamos Middleware
const uploadMiddleware = multer({
    storage
});

//! exportamos rutas
module.exports = uploadMiddleware;