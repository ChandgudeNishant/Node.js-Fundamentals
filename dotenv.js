// dotenv file is use to store environmental variables 
const express = require('express')
const app = express()
// import the dotenv
require('dotenv').config();
//assign the dotenv variable to js variables use where ever you want
const port = process.env.PORT
const nav = process.env.name
console.log(nav)
app.get('/',(req,res)=>{
    console.log(`Running...`)
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})