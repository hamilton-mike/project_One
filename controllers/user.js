const express = require('express')
const bcrypt = require('bcrypt')

const router = express.Router()
const User = require('../models/user')

//loginUser (.post)
router.post('/login', ( req, res )=> {
    console.log('session object', req.session)
    User.findOne({
        username: req.body.username
    }, ((err, foundUser)=> {
        if (err) {
            res.send(err)
        } else {
            if (!foundUser) {
                console.log('incorrect username and/or password 1');
                res.redirect('/login')
            } else {
                if (bcrypt.compareSync(req.body.password, foundUser.password)) {
                    req.session.currentUser = foundUser
                    console.log('Logged in!', foundUser.username)
                    res.redirect('/feed')
                } else {
                    console.log("incorrect username and/or password 2");
                    res.redirect('/login')
                }
            }
        }
    }))
})

//createUser (.post)
router.post('/registration', ( req, res )=> {
    const passwordHash = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    req.body.password = passwordHash

    const userDbEntry = {
        username: req.body.username,
        email: req.body.email,
        password: passwordHash
    }

    User.create(userDbEntry, ((err, createdUser)=> {
        if (err) {
            res.send(err)
        } else {
            req.session.currentUser = createdUser
            console.log("created user is", createdUser)
            res.redirect('/')
        }
    }))

})

//logout (.delete)
router.delete("/logout", (req, res) => {
    req.session.destroy(() => {
      res.redirect("/login")
    });
  });

module.exports = router