const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, "public")));

// app.get('/', function (req, res) {
//   res.send('<h1>Top page</h1>')
// })

app.get('/about', function (req, res) {
    res.send('About')
  })
app.listen(3000)