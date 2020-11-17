const express = require('express')
const passport = require('../config/passport')

const router = express.Router()

// NEW! Didn't cover this in class 
// How can we make sure that someone is logged in to see a page?
// We make our own middleware we can add to our routes.

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login')
}



// // END NEW STUFF

module.exports = router