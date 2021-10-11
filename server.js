// const express = require('express');
//
// const app = express();
// const server = require('http').Server(app);
// const io = require('socket.io')(server);

const express = require("express");
const {createServer} = require("http");
const {Server} = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {});

app.use(express.json())

const rooms = new Map();

app.get('/rooms', (req, res) => {
    res.json(rooms);
});

app.post('/rooms', (req, res) => {
    const {roomId, userName} = req.body;

    console.log(req.body)
    if (!rooms.has(roomId)) {
        rooms.set(
            roomId,
            new Map([
                ['users', new Map()],
                ['messages', []],
            ]))
    }
    res.send();
});

io.on('connection', (socket) => {
    socket.on('ROOM:JOIN', ({roomId, userName}) => {
        socket.join(roomId);
        rooms.get(roomId).get('users').socket(socket.id, userName);
        const users = rooms.get(roomId).get('users').values();
        socket.to(roomId).broadcast.emit('ROOM:JOINED',users);
    });
    console.log('user connected', socket.id);
});

httpServer.listen(9999, (err) => {
    if (err) {
        throw Error(err)
    }
    console.log('server start')
});