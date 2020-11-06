const express = require('express');
const router = express.Router();
const db = require('../PinsterDB/models');


//GET/blogs
router.get('/posts', async (req, res) => {
    let blogPosts = await db.PinsterDB.Post.findAll()
    res.send(blogPosts)
})



module.exports = router