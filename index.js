const chat = require('./chat')
const http = require('http').createServer()
chat(http)
const port = 3000
http.listen(port, ()=>{
    console.log(`Listening on ${port}`)
})