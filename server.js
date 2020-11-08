// Imports
require("dotenv").config();

const express = require('express');
const app = express();
const tumblrApi = require('./apiRoutes/tumblr');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const passport = require('passport');
const blogPost = require('./apiRoutes/blogPost')

const db = require('./models')
const session = require('express-session')
// github authentication -- imports github auth
const auth = require('./auth');
auth(app, passport);

//client needs button that calls server (auth/github) and sees github
//const gitHubStrategy = require('./auth/strategy/github');
//passport.use(gitHubStrategy);

// initialize passport
// app.use(session({
//   secret: "secret key",
//   cookie: {maxAge: 60000}
// }))
// app.use(passport.initialize());
// app.use(passport.session());

//simple server running on PORT 3000
const port = 3000

//SEQUELIZE TEST
db.sequelize.sync();
// Static files setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/app", express.static(__dirname + "/public/app"));
app.use(express.static('public'));
//app.use("/app", express.static(__dirname + "/public/app"));
app.use("/css", express.static(__dirname + "/public/css"));
//app.use("/", express.static(__dirname + "/public/html"));
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
    res.render('dashboard', {title: 'Your Dashboard'})
});

app.get('/login', (req, res) => {
    res.render('login', {title: 'Login'})
});

app.get('/details', (req, res) => {
    res.render('diy-details', {title: 'Search Results'})
});





tumblrApi(app, fetch);

//connect server to api routers
// const apiRouters = require("./apiRoutes/routers");
// //const router = require("./apiRoutes/routers");
// app.use("/apiRoutes/routers", apiRouters)
// const upload = require('./apiRoutes/imgUpload')
// app.use("/apiRoutes/imgUpload", upload)


app.use('/api', blogPost);



// run ejs files
app.set('view engine', 'ejs')

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
});