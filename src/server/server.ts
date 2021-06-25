const server = require('express');
const http = require('http').createServer(server);
const io = require('socket.io')(http);

http.listen(3001, () => {
    console.log('Server started in port 3001');
});