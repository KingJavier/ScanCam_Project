const {userModel, registroModel} = require('../models');
const {registerCtrl, loginCtrl} = require ('../controllers/user');


const sockets = (io) => {
    io.on('connection', (socket) => {
        // console.log('New user connected!');

        // const emitUsers = async () => {
        //     const users = await userModel.find()
        //     //console.log(users);
        //     io.emit('loadusers', users)
        // }
        // emitUsers()

        socket.on('cliente:newuser', async data => {
            const user = await userModel.findOne({email:data.res.data2.user.email}).select('apellido documento email estado idImgPerfil name role status telefono')
            io.emit('server:newuser', user)
        })

        socket.on('cliente:newuserseguridad', async data => {
            const user = await userModel.findOne({email:data.res.data2.user.email}).select('apellido documento email estado idImgPerfil name role status telefono')
            io.emit('server:newuserseguridad', user)
        })

        // socket.on('cliente:activarUser', async data => {
        //     try {
        //         const register = await registerCtrl(data)
        //         io.emit('server:newuser', register)
        //     } catch (error) {
        //         return "ERROR_REGISTER_USER_SOCKET";
        //     }
        // })

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

        socket.on('cliente:excel', async data => {
            console.log(data);
        })

        socket.on('cliente:fototemp', async data => {

            // console.log(data.res.registro);

            const ilovetoyou = await registroModel.findAllData({},{deleted:0, updatedAt:0});
            io.emit('server:fototemp', ilovetoyou)

        })
        
        
    });
};

module.exports = {
    sockets
};