const mongoose = require('mongoose')

const tweetSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true
    },
    entry: {
        type: String,
        require: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Feed', tweetSchema)