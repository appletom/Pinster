const express = require('express')
const app = express()
//simple server running on PORT 3000
const port = 3000

app.get('/', function (req, res) {
    res.send('PONG')
})


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})