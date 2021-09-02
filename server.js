// =======================================
//                DEPENDENCIES
// =======================================
require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const session = require('express-session')
const Feed = require('./controllers/tweet')
const User = require('./controllers/user')

// =======================================
//           GLOBAL CONFIGURATIONS
// =======================================
const app = express()
const port = process.env.PORT || 3000

// =======================================
//               DATABASE
// =======================================
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/'+ `Feeds`
mongoose.connect(MONGODB_URI, options)

mongoose.connection.once('open', ()=> console.log('successfully connected to mongodb!'))
mongoose.connection.on('error', (err) => console.log(err.message, "FIX ME PLZ"))
mongoose.connection.on('disconnected', ()=> console.log('mongo successfully disconnected'))

// =======================================
//               MIDDLEWARE
// =======================================
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}))

app.use(express.static('public'))
app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'))
app.use('/feed', Feed)
app.use('/users', User)

app.get('/', (req, res) => {
	console.log('currentUser: ', req.session.currentUser)
	res.render('login.ejs', {
        currentUser: req.session.currentUser || ""
    })
})

app.get('/registration', (req, res) => {
	console.log('currentUser: ', req.session.currentUser)
	res.render('home.ejs', {
        currentUser: req.session.currentUser || ""
    })
})

// =======================================
//               LISTENER
// =======================================
app.listen(port, ()=> console.log('listening on port:', port))
