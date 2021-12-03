const express = require('express')
const Feed = require('../models/tweet')
const User = require('../models/user')
const router = express.Router()

router.get('/', ( req, res )=> {
    if (req.session.currentUser) {
        Feed.find({}).populate('user').exec((err, feedIndex)=> {
            if (err) {
                res.send(err)
            } else {
                User.find({}, (err, allUsers) => {
                    (err) ? res.send(err) : res.render('index.ejs', {
                        users: allUsers,
                        feed: feedIndex,
                        currentUser: req.session.currentUser
                    })
                })
            }
        })
    }else {
        res.redirect('/')
    }
})

router.get('/new', ( req, res )=> {
    res.render('new.ejs', {
        currentUser: req.session.currentUser
    })
})

router.get('/:id/edit', ( req, res )=> {
    Feed.findById(req.params.id, ((err, editFeed)=> {
        if (err) {
            res.send(err)
        } else {
            res.render('edit.ejs', {
                feed: editFeed,
                currentUser: req.session.currentUser
            })
        }
    }))
})


router.get('/:id', ( req, res )=> {
    Feed.findById(req.params.id).populate('user').exec((err, feedIndex)=> {
        if (err) {
            res.send(err)
        } else {
            User.find({}, (err, allUsers) => {
                (err) ? res.send(err) : res.render('profile.ejs', {
                    users: allUsers,
                    feed: feedIndex,
                    currentUser: req.session.currentUser
                })
            })
        }

    })
})

router.post('/', ( req, res )=> {
    if (req.session.currentUser) {
        req.body.user = req.session.currentUser._id
        Feed.create(req.body, (err, createdFeed)=> {
            (err) ? res.send(err) : res.redirect('/feed')
        })
    } else {
        res.redirect('/login')
    }
})

router.delete('/:id', ( req, res )=> {
    Feed.findByIdAndDelete(req.params.id, (err, feed) => {
        (err) ? res.send(err) : res.redirect('/feed')
    })
})

router.put('/:id', ( req, res)=> {
    Feed.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, feed) => {
        (err) ? res.send(err) : res.redirect('/feed')
    })
})

module.exports = router
