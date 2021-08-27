// =======================================
//                DEPENDENCIES
// =======================================
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const Feed = require('./controllers/tweet')

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
    useUnifiedTopology: true
}

mongoose.connect('mongodb://localhost:27017/Feeds', options)

mongoose.connection.once('open', ()=> console.log('successfully connected to mongodb!'))
mongoose.connection.on('error', (err) => console.log(err.message, "FIX ME PLZ"))
mongoose.connection.on('disconnected', ()=> console.log('mongo successfully disconnected'))

// =======================================
//               MIDDLEWARE
// =======================================
app.use(express.static('public'))
app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'))
app.use('/feed', Feed)

// =======================================
//               LISTENER
// =======================================
app.listen(port, ()=> console.log('listening on port:', port))