const express = require('express')
const User = require('../models/user')
const router = express.Router()

// index (.get) ejs
router.get('/' , (req, res) => {
    res.render('user.ejs')
})

// new (.get) ejs

//edit (.get) ejs

//show (.get) ejs

//create (.post)

//delete (.delete)

//update (.put)

module.exports = router
