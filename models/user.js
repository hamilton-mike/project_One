const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    bio: {
        type: String,
        require: true
    }
}, {timestamps: true})

module.exports = mongoose.model('User', userSchema)