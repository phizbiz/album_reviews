const mongoose = require('mongoose')
const albumSchema = require('./album')

const Album = mongoose.model('Album', albumSchema)

module.exports = {
  Album
}
