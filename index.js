const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello again from DevOps with Docker!</h1>')
})

app.get('/ping', (req, res) => {
  res.json({ message: 'pong' })
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})