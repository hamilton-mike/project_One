const express = require('express')
const Feed = require('../models/tweet')
const User = require('../models/user')
const router = express.Router()

//index (.get) ejs
router.get('/', ( req, res )=> {
    if (req.session.currentUser) {
        Feed.find({}).populate('user').exec((err, feedIndex)=> {
            console.log("FEED INDEX", feedIndex)
            console.log('CURRNT: ', req.session.currentUser)
            if (err) {
                res.send(err)
            } else {
                User.find({}, (err, allUsers) => {
                    console.log("ALL USERs", allUsers);
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


// new (.get) ejs
router.get('/new', ( req, res )=> {
    res.render('new.ejs', {
        currentUser: req.session.currentUser
    })
})



//edit (.get) ejs
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

//show (.get) ejs
router.get('/:id', ( req, res )=> {
    console.log('-------',req.params);
    Feed.findById(req.params.id).populate('user').exec((err, feedIndex)=> {
        if (err) {
            res.send(err)
        } else {
            User.find({}, (err, allUsers) => {
                console.log("ALL USERs", allUsers);
                (err) ? res.send(err) : res.render('profile.ejs', {
                    users: allUsers,
                    feed: feedIndex,
                    currentUser: req.session.currentUser
                })
            })
        }

    })
})

//create (.post)
router.post('/', ( req, res )=> {
    if (req.session.currentUser) {
        req.body.user = req.session.currentUser._id
        Feed.create(req.body, ((err, createdFeed)=> {
            if (err) {
                res.send(err)
            } else {
                console.log(createdFeed)
                res.redirect('/feed')
            }
        }))
    }else {
        res.redirect('/login')
    }
})

//delete (.delete)
router.delete('/:id', ( req, res )=> {
    Feed.findByIdAndDelete(req.params.id, ((err, feed)=> {
        if (err) {
            res.send(err)
        } else {
            console.log('deleting item with the id:', req.params.id)
            res.redirect('/feed')
        }
    }))
})

//update (.put)
router.put('/:id', ( req, res)=> {
    Feed.findByIdAndUpdate(req.params.id, req.body, {new: true}, ((err, feed)=> {
        if (err) {
            res.send(err)
        } else {
            console.log('updated item at id:', req.params.id)
            res.redirect('/feed')
        }
    }))
})

module.exports = router
