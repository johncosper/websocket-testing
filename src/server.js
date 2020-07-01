const express = require('express');
const app = express();
const port = 3000;
const http = require('http').createServer();

const io = require('socket.io')(http);

const roomNames = ['test1', 'test2', 'test3'];

// io.on("connection", (socket) => {

//     socket.emit("welcome", "Hello and welcome to my socket.io server!");

//     console.log('New client is connected!')
// });

io.of('/test').on('connection', (socket) => {

    console.log('New Client');
    socket.emit('welcome', 'Hello and welcome to my test channel!');

    socket.on('joinRoom', (room) => {
        if(roomNames.includes(room)) {
            socket.join(room);
            io.of('/test').in(room).emit('newUser', 'New User has joined ' + room);
            return socket.emit('success', 'You have successfully joined ' + room);
        } else {
            return socket.emit('error', 'ERROR, No room named ' + room + ' exist');
        }
        
    });

});

http.listen(port, () => {
    console.log('Server is listening on localhost:' + port);
});