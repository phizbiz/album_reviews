const mongoose = require('mongoose')

mongoose
  .connect(
    'mongodb+srv://phizbiz:reynard4@generalassemblycluster.oten2h7.mongodb.net/albumReviewDatabase'
  )
  .then(() => {
    console.log('Successfully connected to MongoDB.')
  })
  .catch((e) => {
    concole.log('Connection error', e.messages)
  })

const db = mongoose.connection
module.exports = db
