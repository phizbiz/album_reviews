const mongoose = require('mongoose')
// below could be placed in server.js
require('dotenv').config()

let dbUrl =
  process.env.NODE_ENV === 'production'
    ? process.env.MONGODB_URI
    : 'mongodb://127.0.0.1:27017/albumReviewDatabase'

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Successfully connected to MongoDB.')
  })
  .catch((e) => {
    concole.log('Connection error', e.messages)
  })

const db = mongoose.connection
module.exports = db
