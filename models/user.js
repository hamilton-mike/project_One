const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        minlength: 1,
        maxlength: 25
    },
    username: {
        type: String,
        require: true,
        unique: true,
        minlength: 1,
        maxlength: 25
    },
    password: {
        type: String,
        require: true,
        minlength: 0
    },
    bio: {
        type: String,
        require: true,
    }
}, {timestamps: true})

module.exports = mongoose.model('User', userSchema)