const express = require('express');
const router = express.Router();
const db = require('../models')


//GET/blogs
router.get('/posts', async (req, res) => {
    const posts = await db.Post.findAll()
    res.send(posts)
})



module.exports = router