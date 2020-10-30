require("dotenv").config();

// require express
const express = require('express')
const app = express()

//simple server running on PORT 3000
const port = 3000

//require body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());



app.get('/', function (req, res) {
    res.send('PONG')
})



//connect server to public folder and files
app.use("/", express.static(__dirname + "/public"));
app.use("/css", express.static(__dirname + "/css"));
app.use("/js", express.static(__dirname + "/js"));



//connect server to api routers
const apiRouters = require("./apiRoutes/routers");
app.use("/apiRoutes/routers", apiRouters)




app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})