// Imports
require("dotenv").config();

const express = require('express');
const app = express();
const tumblrApi = require('./apiRoutes/tumblr');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
//const passport = require('passport');
const blogs = require('./apiRoutes/blogPost')
const db = require('./models')
const session = require('express-session')

// github authentication -- imports github auth
const passport = require('./config/passport');
const authRouter = require('./auth/index')


// github authentication -- imports github auth
const auth = require('./auth');
const gitHubStrategy = require('./auth/strategy/github');
passport.use(gitHubStrategy);

app.use(session({
    secret: 'super secret',
    cookie: {maxAge: 60000}
}))
app.use(passport.initialize());
app.use(passport.session());
// //initialize passport
// app.use(session({
//   secret: "secret key",
//   cookie: {maxAge: 60000}
// }))
// app.use(passport.initialize());
// app.use(passport.session());

//simple server running on PORT 3000
const port = process.env.PORT

//SEQUELIZE TEST
db.sequelize.sync();

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
    res.render('index', { title: 'Pinster' })
});

app.get('/about-us', (req, res) => {
    res.render('about-us', { title: 'About The Pinster Team' })
});

app.get('/dashboard', (req, res) => {
    res.render('dashboard', { title: 'Your Dashboard', loggedIn: true, username: '' })
});

app.get('/login', (req, res) => {
    res.render('login', { title: 'Login' })
});

app.get('/details', (req, res) => {
    res.render('diy-details', { title: 'This DIY Project' })
});

app.get('/search', (req, res) => {
    res.render('search', { title: 'Search Results', searchResults: [], data: { userQuery: req.params.userQuery } })
});



app.use('/auth', authRouter)

    
// get tumblr api into user dashboard
app.get('/projects', async (req, res) => {

    const { tags, blog } = req.body;
    const params = `${blog ? "blog=" + blog : ''}${tags ? "&tags=" + tags : ''}`;
    await fetch(`https://api.tumblr.com/v2/tagged?api_key=N0uGR0dLh0MPjWi3Hw2HXnn6ZLoJeGZUo84i9iATR9JnoHzhOA&tag=diy%20crochet`)
    .then(result => result.json())
    .then(data => res.render('projects',{data: data.response, title: 'Projects'}))
    });



//SEQUELIZE TEST
// db.sequelize.authenticate().then( ()=> {
//     console.log("Database connected")
// }).catch( ()=>{
//     console.log("There was an error")

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

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});