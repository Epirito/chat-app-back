module.exports = function(httpServer) {
    const io = require('socket.io')(httpServer,{
        cors: {
            origin: "http://127.0.0.1:5173",
            methods: ["GET", "POST"]
        }
    })

    io.on('connection', socket => {
        io.emit('connected', "username")
        console.log('connected')
        socket.on('msg', (msg)=>{
            console.log(msg)
            io.emit('relayedMsg', msg)
        })
    })
    io.on('disconnect', socket=>{
        console.log('disconnected')
        io.emit('disconnected', "username")
    })
}