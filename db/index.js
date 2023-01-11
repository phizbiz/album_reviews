const mongoose = require('mongoose')
// below could be placed in server.js
require('dotenv').config()

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Successfully connected to MongoDB.')
  })
  .catch((e) => {
    console.log('Connection error', e.messages)
  })

const db = mongoose.connection
module.exports = db
