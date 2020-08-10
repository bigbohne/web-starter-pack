const express = require('express')
const app = express()
 
app.get('/api/hello', function (req, res) {
  res.send({'response':'Hello World from the backend'})
})
 
app.listen(8000)
