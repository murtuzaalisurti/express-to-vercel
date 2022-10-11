const mongoose = require('mongoose')
require('dotenv').config()

function dbConnect() {
    mongoose.connect(process.env.MC, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
        console.log('Connected to MongoDB')
    }).catch((err) => {
        console.log(err)
    })
}

module.exports = {
    dbConnect
}