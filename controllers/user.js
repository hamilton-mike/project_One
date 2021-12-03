const express = require('express')
const bcrypt = require('bcrypt')
const User = require('../models/user')
const router = express.Router()

router.post('/login', ( req, res )=> {
    User.findOne({
        username: req.body.username
    }, ((err, foundUser)=> {
        if (err) {
            res.send(err)
        } else {
            if (!foundUser) {
                res.redirect('/')
            } else {
                if (bcrypt.compareSync(req.body.password, foundUser.password)) {
                    req.session.currentUser = foundUser
                    res.redirect('/feed')
                } else {
                    res.redirect('/')
                }
            }
        }
    }))
})

router.post('/registration', ( req, res )=> {
    const passwordHash = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    req.body.password = passwordHash;

    const userDbEntry = {
        force: req.body.force,
        username: req.body.username,
        email: req.body.email,
        password: passwordHash,
        bio: req.body.bio
    }

    User.create(userDbEntry, ((err, createdUser)=> {
        if (err) {
            res.send(err)
        } else {
            req.session.currentUser = createdUser
            res.redirect('/feed')
        }
    }))

})

router.delete("/logout", (req, res) => {
    req.session.destroy()
    res.redirect("/")
});

module.exports = router
