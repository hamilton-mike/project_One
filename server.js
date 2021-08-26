// =======================================
//                DEPENDENCIES
// =======================================
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
//modles data import

// =======================================
//           GLOBAL CONFIGURATIONS
// =======================================
const app = express()
const port = 3000

// =======================================
//               DATABASE
// =======================================
const options = {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}

mongoose.connect('mongodb://localhost:27017/', options) //still havent come up with a name for our db yet

mongoose.connection.once('open', ()=> console.log('successfully connected to mongodb!'))
mongoose.connection.on('error', (err) => console.log(err.message, "FIX ME PLZ"))
mongoose.connection.on('disconnected', ()=> console.log('mongo successfully disconnected'))

// =======================================
//               MIDDLEWARE
// =======================================
app.use(express.static('public'))
app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'))
// data router

// =======================================
//               LISTENER
// =======================================
app.listen(port, ()=> console.log('listening on port:', port))