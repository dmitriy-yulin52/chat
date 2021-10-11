// const express = require('express');
//
// const app = express();
// const server = require('http').Server(app);
//
//
// // const options = {cors: { origin: "*" }}
// const io = require('socket.io')(server);

const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {});

const rooms = new Map();

app.get('/rooms', (req,res)=> {
   res.json(rooms);
});

io.on('connection',socket => {
    console.log('user connected',socket.id)
})

httpServer.listen(9000, (err)=>{
    console.log('server start')
    if(err){
        throw Error(err)
    }
});