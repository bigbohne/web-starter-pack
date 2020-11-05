const express = require('express')
const app = express()
const path = require('path');
var server = require('http').createServer(app);
var io = require('socket.io')(server);

// The sate of the application
var counter = 0;

io.on('connection', function(socket) {
  socket.join("news")
  socket.emit("News", {"counter" : counter});
});

app.get('/api/up', function (req, res) {
  counter = counter + 1
  io.to('news').emit("News", {"counter" : counter});
  res.end();
})
 
app.get('/api/down', function (req, res) {
  counter = counter - 1
  io.to('news').emit("News", {"counter" : counter});
  res.end();
})

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

server.listen(8000, '0.0.0.0')
