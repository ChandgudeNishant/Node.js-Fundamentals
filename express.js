const express =  require('express')
const app = express()
const PORT = 3000;

app.get('/',(req, res)=>{
    res.send(`Hello Nishant`)
})

app.get('/user/:username',(req, res)=>{
    res.send(`Hello ${req.params.username}`)
    console.log('hello world')
})




















app.listen(PORT,()=>{
    console.log(`App is running... on ${PORT}`)
})
