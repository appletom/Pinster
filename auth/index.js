module.exports = (app, passport) => {

  // -----------------------------------------------------------------------------
  //                                LOGIN
  // -----------------------------------------------------------------------------
  app.get('/auth/github', passport.authenticate('github'));

  // -----------------------------------------------------------------------------
  //                                CALLBACK
  // -----------------------------------------------------------------------------
  app.get(
    '/auth/github/callback',
    passport.authenticate('github', {failureRedirect: '/'}),
    (req, res) => res.redirect('/') // create new home.js or redirect to main.ejs??
  );

};