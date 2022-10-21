const mongoose = require('mongoose')
const albumSchema = require('./album')
const reviewSchema = require('./review')

const Album = mongoose.model('Album', albumSchema)
const Review = mongoose.model('Review', reviewSchema)

module.exports = {
  Album,
  Review
}
