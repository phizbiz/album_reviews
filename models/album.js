const { Schema } = require('mongoose')

const albumSchema = new Schema(
  {
    name: { type: String, required: true },
    artist: { type: String, required: true },
    rating: { type: Number, required: true }
  },
  { timestamps: true }
)

module.exports = albumSchema
