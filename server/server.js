const express = require('express');
const http = require('http');
const socketio = require('socket.io');

require('./db/mongoose');
const userRouter = require('./routers/user');
const roomRouter = require('./routers/room');
const cookieParser = require('cookie-parser');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
    console.log('New Websocket connection', socket.id);
});

app.use(cookieParser());
app.use(express.json());
app.use(userRouter);
app.use(roomRouter);

module.exports = server;
