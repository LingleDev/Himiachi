const express = require('express')
const app = express()
const http = require('http')
const path = require('path')
const server = http.Server(app)
const port = process.env.PORT

app.set('port', port)
app.use('./website', express.static(__dirname + "./website"))
app.get('/', (request, response) => {
  response.sendFile(path.join(`${__dirname}index.html`))
})

server.listen(port, () => {
  console.log(`Starting server on port ${port}`)
})
