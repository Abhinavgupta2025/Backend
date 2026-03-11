const express = require('express');
const app = express();
const {Server} = require('socket.io');
const http = require('http');
const server = http.createServer(app);
const io = new Server(server);
server.listen(3000,()=>{
    console.log("Listening here");
})