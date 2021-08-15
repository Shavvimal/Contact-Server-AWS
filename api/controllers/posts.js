const express = require('express');
const router = express.Router();

const Post = require('../models/post')

// posts index routes
router.get('/', async (req, res) => {
    try {
        const posts = await Post.all
        res.json({posts})
    } catch(err) {
        res.status(500).json({err})
    }
})

// Post show route
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(parseInt(req.params.id))
        res.json(post)
    } catch(err) {
        res.status(404).json({err})
    }
})

// Create post route
router.post('/', async (req, res) => {
    try {
        const post = await Post.create(req.body.name, req.body.email, req.body.message)
        res.json(post)
    } catch(err) {
        res.status(404).json({err})
    }
})

module.exports = router;