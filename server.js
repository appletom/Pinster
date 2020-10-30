require("dotenv").config()
const express = require('express')
const app = express()
const tumblrApi = require('./server/tumblrApi/tmblrAuth')
//simple server running on PORT 3000
const port = 3000


app.use("/app", express.static(__dirname + "/public/app"))
app.use("/css", express.static(__dirname + "/public/css"))
app.use("/", express.static(__dirname + "/public/html"))





app.get('/', function (req, res) {
    res.send('PONG')
})



app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})