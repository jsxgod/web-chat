const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 4000

const router = require('./router')

const cors = require('cors')

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        credentials: true
    }
});

/**
    Acts as a "main" for this file because we have to constatly monitor
    the {socket} of connected client
*/
io.on('connection', (socket) => {
    console.log('New client connection...')

    socket.on('join', ({ name, room }, callback) => {
        console.log(`${name} joined room: ${room}`);

    });
    
    socket.on('disconnect', () => {
        console.log('Client disconnected...')
    });
});

app.use(cors())
app.use('/', router);

server.listen(PORT, () => console.log(`server started on port ${PORT}`));