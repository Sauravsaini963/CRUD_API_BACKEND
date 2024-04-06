// var http = require('http')
const userRouter= require("./v1/routes/index")
const express= require("express")
const app= express()
const cors= require("cors")
const bodyParser=require("body-parser")
var port = 8080
// var server = http.createServer(function(res,err){})
require('./db')
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/',userRouter)
// app.post("/get",(req,res)=>{
//   console.log(req.body);
// })

app.listen(port)
console.log('Server is running at port : 8080')


// const express = require('express')

// const app = express()

// const userRouter= require("./v1/routes/index")


// app.listen(8081)
// console.log('Server is running at port : 8081')

// require('./db')


// app.use('/',userRouter)

