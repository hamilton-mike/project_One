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
const PORT = process.env.PORT || 3000

// =======================================
//               DATABASE
// =======================================
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
const DB_URL = process.env.DB_URL || 'mongodb://localhost/'+ `Feeds`
mongoose.connect(DB_URL, options)

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
app.listen(PORT, ()=> console.log('listening on PORT:', PORT))
