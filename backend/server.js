const express = require('express')
const app = express()
 
var counter = 0;

app.get('/api/up', function (req, res) {
  counter = counter + 1
  res.send('ok')
})
 
app.get('/api/down', function (req, res) {
  counter = counter - 1
  res.send('ok')
})

 
app.get('/api/value', function (req, res) {
  res.send({"counter" : counter})
})

app.listen(8000, '0.0.0.0')
