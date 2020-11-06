require("dotenv").config();

const express = require('express');
const app = express();
const tumblrApi = require('./apiRoutes/tumblr');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const passport = require('passport');
const db = require('./PinsterDB/models')
// github authentication -- imports github auth
const auth = require('./auth');
auth(app, passport);

//client needs button that calls server (auth/github) and sees github
const gitHubStrategy = require('./auth/strategy/github');
passport.use(gitHubStrategy);



//simple server running on PORT 3000
const port = 3000


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/app", express.static(__dirname + "/public/app"));
app.use("/css", express.static(__dirname + "/public/css"));
app.use("/", express.static(__dirname + "/public/html"));

//SEQUELIZE TEST
// db.sequelize.authenticate().then( ()=> {
//     console.log("Database connected")
// }).catch( ()=>{
//     console.log("There was an errro")
// })
db.sequelize.sync().then( () => {
    console.log("Create all tables in Databases")
});



tumblrApi(app, fetch);

//connect server to api routers
const apiRouters = require("./apiRoutes/routers");
//const router = require("./apiRoutes/routers");
app.use("/apiRoutes/routers", apiRouters)
const upload = require('./apiRoutes/imgUpload')
app.use("/apiRoutes/imgUpload", upload)
const blogPost = require('./apiRoutes/BlogPost')

app.use('/apiRoutes/posts', blogPost);

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})