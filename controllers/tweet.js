const express = require('express')
const Feed = require('../models/tweet')
const router = express.Router()

//index (.get) ejs
router.get('/', ( req, res )=> {
    Feed.find({}, ((err, feedIndex)=> {
        if (err) {
            res.send(err)
        } else {
            res.render('index.ejs', {
                feed: feedIndex
            })
        }
    }))
})

// new (.get) ejs
router.get('/new', ( req, res )=> {
    res.render('new.ejs')
})

//edit (.get) ejs
router.get('/:id/edit', ( req, res )=> {
    Feed.findById(req.params.id, ((err, idFeed)=> {
        if (err) {
            res.send(err)
        } else {
            res.render('edit.ejs', {
                feed: idFeed,
                id: req.params.id
            })
        }
    }))
})

//show (.get) ejs

//create (.post)
router.post('/', ( req, res )=> {
    Feed.create(req.body, ((err, createdFeed)=> {
        if (err) {
            res.send(err)
        } else {
            res.redirect('/feed')
        }
    }))
})

//delete (.delete)

//update (.put)

module.exports = router