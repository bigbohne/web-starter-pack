const express = require('express')
const app = express()
var server = require('http').createServer(app);
var io = require('socket.io')(server)

var counter = 0;

io.on('connection', function(socket) {
  socket.join('updates');
  socket.send({"counter" : counter});
});

app.get('/api/up', function (req, res) {
  counter = counter + 1
  io.to('updates').send({"counter" : counter});
})
 
app.get('/api/down', function (req, res) {
  counter = counter - 1
  io.to('updates').send({"counter" : counter});
})

server.listen(8000, '0.0.0.0')
