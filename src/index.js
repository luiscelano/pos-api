import express from 'express'
import http from 'http'
import { initAPI } from 'api'

const app = express()

const HOST = 'localhost'
const PORT = 3000

const server = http.createServer(app)

initAPI(app)

app.get('/healthcheck', (req, res) => {
  res.send('Ok')
})

server.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`)
})
