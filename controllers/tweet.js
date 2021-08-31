const express = require('express')
const Feed = require('../models/tweet')
const router = express.Router()

//index (.get) ejs
router.get('/', ( req, res )=> {
    // Feed.find({}, ((err, feedIndex)=> {
    //     if (err) {
    //         res.send(err)
    //     } else {
    //         res.render('index.ejs', {
    //             feed: feedIndex,
    //             currentUser: req.session.currentUser
    //         })
    //     }
    // }))
    if (req.session.currentUser) {
        Feed.find({user: req.session.currentUser._id}, (err, feedIndex)=> {
            if (err) {
                res.send(err)
            } else {
                res.render('index.ejs', {
                    feed: feedIndex,
                    currentUser: req.session.currentUser
                })
            }
        })
    } else {
        res.redirect('/feed')
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
//     Feed.findById(req.params.id, ((err, showFeed)=> {
//         if (err) {
//             res.send(err)
//         } else {
//             res.render('show.ejs', {
//                 feed: showFeed,
//                 id: req.params.id,
//                 currentUser: req.session.currentUser
//             })
//         }
//     }))
    Feed.findById(req.params.id).populate('User').exec((err, showFeed)=> {
        if (err) {
            res.send(err)
        } else {
            res.render("show.ejs", {
                feed: showFeed,
                currentUser: req.session.currentUser
            })
        }
    })
})

//create (.post)
router.post('/', ( req, res )=> {
    if (req.session.currentUser) {
        req.body.user = req.body.currentUser._id
        Feed.create(req.body, ((err, createdFeed)=> {
            if (err) {
                res.send(err)
            } else {
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
