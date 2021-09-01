const mongoose = require('mongoose')

const tweetSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true,
    },
    entry: {
        type: String,
        require: true,
        minlength: 1,
        maxlength: 200
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
    }
}, {timestamps: true})

module.exports = mongoose.model('Feed', tweetSchema)