require("dotenv").config();



const express = require('express');
const app = express();
const tumblrApi = require('./apiRoutes/tumblr');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');


//simple server running on PORT 3000
const port = 3000


app.use(bodyParser.json());

app.use("/app", express.static(__dirname + "/public/app"));
app.use("/css", express.static(__dirname + "/public/css"));
app.use("/", express.static(__dirname + "/public/html"));





app.get('/', function (req, res) {
    res.send('PONG')
})

tumblrApi(app, fetch);




//connect server to api routers
const apiRouters = require("./apiRoutes/routers");
app.use("/apiRoutes/routers", apiRouters)




app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})