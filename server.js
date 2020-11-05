require("dotenv").config();



const express = require('express');
const app = express();
const tumblrApi = require('./apiRoutes/tumblr');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');



//simple server running on PORT 3000
const port = 3000
const db = require('./PinsterDB/models')

app.use(bodyParser.json());

app.use("/app", express.static(__dirname + "/public/app"));
app.use("/css", express.static(__dirname + "/public/css"));
app.use("/", express.static(__dirname + "/public/html"));

//SEQUELIZE TEST
// db.sequelize.authenticate().then( ()=> {
//     console.log("Database connected")
// }).catch( ()=>{
//     console.log("There was an errro")
// })
db.sequelize.sync()


app.get('/', function (req, res) {
    res.send('PONG')
})

tumblrApi(app, fetch);

//connect server to api routers
const apiRouters = require("./apiRoutes/routers");
const router = require("./apiRoutes/routers");
app.use("/apiRoutes/routers", apiRouters)
const upload = require('./apiRoutes/imgUpload')
app.use("/apiRoutes/imgUpload", upload)


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})