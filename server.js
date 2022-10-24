const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { Album, Review } = require('./models')

const app = express()

//middleware
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send({ msg: 'This route is being hit' })
})

//Album Routes

//read all albums -- GET
app.get('/albums', async (req, res) => {
  let allAlbums = await Album.find({})
  res.json(allAlbums)
})

// create album -- POST
app.post('/albums', async (req, res) => {
  let createdAlbum = await Album.create(req.body)
  res.json(createdAlbum)
})

// delete album -- DELETE
app.delete('/albums', async (req, res) => {
  let deletedAlbum = await Album.deleteOne(req.body)
  res.json(deletedAlbum)
})

// update album -- PUT
app.put('/albums', async (req, res) => {
  let updatedAlbum = await Album.updateOne(req.body)
  res.json(updatedAlbum)
})

//Reviews

// get all reviews --> GET
app.get('/reviews', async (req, res) => {
  const allReviews = await Review.find({})
  res.json(allReviews)
})

// create a review --> POST
app.post('/reviews', async (req, res) => {
  let exampleAlbumId = '6352e02aceebef3dbbbbc897'
  const requestBody = { ...req.body, album: exampleAlbumId }

  let createdReview = await Review.create(requestBody)
  res.json(createdReview)
})

app.listen(PORT, () => {
  console.log(`Express server listening on port: ${PORT}`)
})
