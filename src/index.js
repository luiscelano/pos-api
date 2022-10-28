import express from 'express'
import bodyParser from 'body-parser'
import http from 'http'
import path from 'path'
import { initAPI } from 'api'
import 'dotenv/config'
import config from 'config'
;(async () => {
  const app = express()

  const HOST = 'localhost'
  const PORT = 3000

  global.config = await config()

  const server = http.createServer(app)

  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  app.use(express.static(path.join(__dirname, 'views')))

  initAPI(app)
  app.get('/healthcheck', (req, res) => {
    res.send('Ok')
  })

  app.get('/homepage', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/views/home.html'))
  })

  server.listen(PORT, HOST, () => {
    console.log(`Server running on http://${HOST}:${PORT}`)
  })
})()
