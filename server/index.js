const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 4000

const router = require('./router')

const app = express();
const server = http.createServer(app);
const io = socketio(server);

/**
    Acts as a "main" for this file because we have to constatly monitor
    the {socket} of connected client
*/
io.on('connection', (socket) => {
    console.log('New client connection...')

    
    socket.on('disconnect', () => {
        console.log('Client disconnected...')
    })
});

app.use('/', router);

server.listen(PORT, () => console.log(`server started on port ${PORT}`));