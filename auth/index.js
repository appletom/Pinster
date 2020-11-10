const express = require('express')
const passport = require('../config/passport')
const ensureAuthenticated = require('../middleware/ensureAuthenticated');
const router = express.Router()

// Callback
router.get('/github/callback', passport.authenticate('github', { failureRedirect: '/'}) ,(req, res) => {
    res.redirect('/dashboard')
  
})



// This is the route I call when I want to login
router.get('/github', passport.authenticate('github')) 


// This is the route I call when I want to log out
router.get('/logout', (req, res) => {
    req.logout()
    res.redirect("/")
})


module.exports = router