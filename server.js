// Imports
require("dotenv").config();

const express = require('express');
const app = express();
const tumblrApi = require('./apiRoutes/tumblr');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const passport = require('passport');
const blogs = require('./apiRoutes/blogPost')
const db = require('./models')
const session = require('express-session')

// github authentication -- imports github auth
// const auth = require('./auth');
// auth(app, passport);
// const gitHubStrategy = require('./auth/strategy/github');
// passport.use(gitHubStrategy);

// //initialize passport
// app.use(session({
//   secret: "secret key",
//   cookie: {maxAge: 60000}
// }))
// app.use(passport.initialize());
// app.use(passport.session());

//simple server running on PORT 3000
const port = 3000

//SEQUELIZE TEST
//db.sequelize.sync();

// Static files setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/app", express.static(__dirname + "/public/app"));
app.use(express.static('public'));
app.use("/css", express.static(__dirname + "/public/css"));
app.use("/img", express.static(__dirname + "public/img"));

// Set templating engine
app.set('view engine', 'ejs');

//EJS Layout Navigation
app.get('/', (req, res) => {
    res.render('index', {title: 'Pinster'})
});

app.get('/about-us', (req, res) => {
    res.render('about-us', {title: 'About The Pinster Team'})
});

app.get('/dashboard', (req, res) => {
    res.render('dashboard', {title: 'Your Dashboard', loggedIn: true, username:''})
});

app.get('/login', (req, res) => {
    res.render('login', {title: 'Login'})
});

app.get('/details', (req, res) => {
    res.render('diy-details', {title: 'This DIY Project'})
});

app.get('/search', (req, res) => {
    res.render('search', {title: 'Search Results', searchResults: [], data: {userQuery: req.params.userQuery}})
});

// app.get('/api/tmblrBlogs', (req,res)=>{
    
// })

tumblrApi(app, fetch);
app.use('/apiRoutes/tumblr', tumblrApi)

//connect server to api routers
const apiRouters = require("./apiRoutes/routers");
const router = require("./apiRoutes/routers");
app.use("/apiRoutes/routers", apiRouters)
const upload = require('./apiRoutes/imgUpload')
app.use("/apiRoutes/imgUpload", upload)
app.use('/apiRoutes/posts', blogs);

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
});