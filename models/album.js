const { Schema } = require('mongoose')

const albumSchema = new Schema(
  {
    name: { type: String, required: true },
    artist: { type: String, required: true },
    label: { type: String, required: true },
    art: { type: String, required: false }
  },
  { timestamps: true }
)

module.exports = albumSchema
