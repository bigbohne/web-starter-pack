const express = require('express')
const app = express()
const path = require('path');
var server = require('http').createServer(app);
var io = require('socket.io')(server);

// The sate of the application.
var counter = 0;

io.on('connection', function(socket) {
  socket = socket.join("counter")

  // Send initial state to client.
  socket.emit("counter", {"counter" : counter});
});

function updateClients() {
  io.emit("counter", {"counter" : counter});
}

app.get('/api/up', function (req, res) {
  counter = counter + 1
  updateClients();
  res.end();
})
 
app.get('/api/down', function (req, res) {
  counter = counter - 1
  updateClients();
  res.end();
})

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

server.listen(8000, '0.0.0.0')
