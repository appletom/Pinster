// Imports
require("dotenv").config();

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const tumblrApi = require('./apiRoutes/tumblr');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const port = 3000;
const db = require('./PinsterDB/models')

// Static files setup
app.use(bodyParser.json());
app.use(express.static('public'));
//app.use("/app", express.static(__dirname + "/public/app"));
app.use("/css", express.static(__dirname + "/public/css"));
//app.use("/", express.static(__dirname + "/public/html"));
app.use("/img", express.static(__dirname + "public/img"));

// Set templating engine
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('layout', './index');

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

//SEQUELIZE TEST
// db.sequelize.authenticate().then( ()=> {
//     console.log("Database connected")
// }).catch( ()=>{
//     console.log("There was an errro")
// })
//db.sequelize.sync()


app.get('/', function (req, res) {
    res.send('PONG')
})

tumblrApi(app, fetch);

//Connect server to api routers
const apiRouters = require("./apiRoutes/routers");
app.use("/apiRoutes/routers", apiRouters)

// Listen on Port X
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
});