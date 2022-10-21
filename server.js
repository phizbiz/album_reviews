const express = require('express')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { Album } = require('./models')

const app = express()

//middleware
app.use(express.json())

app.get('/', (req, res) => {
  res.send({ msg: 'This route is being hit' })
})

//Album Routes

// create album
app.post('/albums', (req, res) => {
  res.send(req.body)
})

app.listen(PORT, () => {
  console.log(`Express server listening on port: ${PORT}`)
})
