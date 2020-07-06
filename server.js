const express = require("express");
const http = require("http").createServer();
const port = 5000;
const io = require("socket.io")(http);

const app = express();

io.on('connection', (socket) => {
    socket.on('message', (message) => {
        socket.broadcast.emit('message', message);
    })
});

http.listen(port);