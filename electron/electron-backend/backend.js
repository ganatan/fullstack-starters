'use strict'

const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.BACKEND_PORT || 3000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    name: 'simple-electron-backend',
    status: 'running',
    endpoints: {
      hello: '/api/hello'
    }
  })
})

app.get('/api/hello', (req, res) => {
  res.json({
    message: 'Hello from backend',
    date: new Date().toISOString()
  })
})

app.listen(port, () => {
  console.log(`Backend listening on http://localhost:${port}`)
})
