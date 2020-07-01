const io = require('socket.io-client');

let test = io.connect('http://localhost:3000/test');

test.on('welcome', (msg) => {
    console.log('Recieved: ', msg);
});

test.emit('joinRoom', 'test1');

test.on('newUser', (res) => {console.log(res)});

test.on('error', (err) => {console.log(err)});

test.on('success', (res) => {console.log(res)});