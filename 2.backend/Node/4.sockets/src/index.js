const express = require('express')
const path = require('path')
const socketio = require('socket.io')
const http = require('http')

const app = express()

app.set('port',3000)

app.use(express.static(path.join(__dirname, 'public'))) // para utilizar los archivos staticos de public

const server = http.createServer(app)
const io = socketio(server)

require('./socket')(io)

server.listen(app.get('port'), ()=> {
    console.log('App corriendo en el puerto 3000');
})