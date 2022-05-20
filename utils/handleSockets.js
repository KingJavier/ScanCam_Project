const {userModel, registroModel, perfilModel} = require('../models');
const {loginSocket} = require ('../controllers/user');
const { getRegistrossocket } = require('../controllers/registro');
const { getRegistrosSalsocket } = require('../controllers/regsalida');

const sockets = (io) => {
    io.on('connection', (socket) => {
        // console.log('New user connected!');

        //!------------------------------------CREACIÖN DE USUARIOS--------------------------------------- 

        socket.on('cliente:newuser', async data => {
            const user = await userModel.findOne({email:data.res.data2.user.email}).select('apellido documento email estado idImgPerfil name role status telefono')
            io.emit('server:newuser', user)
        })

        socket.on('cliente:newuserseguridad', async data => {
            const user = await userModel.findOne({email:data.res.data2.user.email}).select('apellido documento email estado idImgPerfil name role status telefono')
            io.emit('server:newuserseguridad', user)
        })


        //!------------------------------------LOGEO DE USUARIOS--------------------------------------- 

        socket.on('cliente:newlogin', async data => {
            try {

                const login = await loginSocket(data)

                const role = login.user.role
                const nombre = login.user.name
                
                const datos = {
                    role,
                    nombre
                }

                io.emit('server:newlogin', datos)
            } catch (error) {
                return "ERROR_LOGIN_USER_SOCKET";
            }
        })

        //!------------------------------------REGISTROS DE ENTRADA Y SALIDA---------------------------------------

        socket.on('cliente:fototemp', async data => {
            // console.log(data.res);
            const registro = await registroModel.findAllData({},{deleted:0, updatedAt:0});
            io.emit('server:fototemp', registro)
        })

        socket.on('cliente:estadisticas', async data => {
            // console.log(data.res);
            const regEntrada = await getRegistrossocket();
            const regSalida = await getRegistrosSalsocket();

            const datos = {
                regEntrada,
                regSalida
            }
            io.emit('server:estadisticas', datos)
        })

        //!------------------------------------IMG PERFIL--------------------------------------- 

        socket.on('cliente:enviar-id-img',async img_id =>{
            //console.log(img_id);
            const img_url = await perfilModel.findById(img_id, {deleted:0, createdAt:0, updatedAt:0});
            // console.log(img_url.url);
            socket.emit('server:url-img',img_url.url);
        })

        //!------------------------------------CAMBIO ROLE---------------------------------------
        socket.on('cliente:cambiaractividad', async data=>{
            // console.log('Esto es mucho',data)
            const user = await userModel.find()
            io.emit('server:cambiaracti', user)
            // console.log(user);
        })

        //!------------------------------------CREACIÓN USER EXCEL ---------------------------------------

        // socket.on('cliente:excel', async data => {
        //     console.log(data);
        // })
        //! Enviar datos desde 
    });
};

module.exports = {
    sockets
};