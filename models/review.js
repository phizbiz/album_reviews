const { Schema } = require('mongoose')

const reviewSchema = new Schema(
  {
    name: { type: String, required: true },
    body: { type: String, required: true },
    stars: { type: Number, required: false },
    album: { type: Schema.Types.ObjectId, ref: 'Album' }
  },
  { timestamps: true }
)

module.exports = reviewSchema
