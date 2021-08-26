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
    Feed.findById(req.params.id, ((err, editFeed)=> {
        if (err) {
            res.send(err)
        } else {
            res.render('edit.ejs', {
                feed: editFeed,
            })
        }
    }))
})

//show (.get) ejs
router.get('/:id', ( req, res )=> {
    Feed.findById(req.params.id, ((err, showFeed)=> {
        if (err) {
            res.send(err)
        } else {
            res.render('show.ejs', {
                feed: showFeed,
                id: req.params.id
            })
        }
    }))
})

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