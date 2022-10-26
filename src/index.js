import express from 'express'
import http from 'http'
import path from 'path'
import { initAPI } from 'api'

const app = express()

const HOST = 'localhost'
const PORT = 3000

const server = http.createServer(app)

initAPI(app)
app.use(express.static(path.join(__dirname, 'views')))

app.get('/healthcheck', (req, res) => {
  res.send('Ok')
})

app.get('/homepage', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/views/home.html'))
})

server.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`)
})
