// fs Module is used to interact with files in node js
const express = require('express')
const app = express();
var fs = require('fs');

// create a text file.
// fs.writeFile('text.txt',"Hello Nishant",(err)=>{});

// read the file data
// fs.readFile('./text.txt', "utf-8",(err, fileData) =>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(fileData);
//     }
// })

// add the data to a file basically append the file
// fs.appendFile("./text.txt", "\nnext line Nishant", (err)=>{})

// make a copy of existing file
// fs.cp("./text.txt", "./copy.txt", (err)=>{})

// delete the file
// fs.unlink('./copy.txt', (err)=>{console.log(err)});

// get statistics and file properties by stat
// fs.stat("./text.txt", (err, stat)=>{
//     console.log(stat)
// })

//----------------------------------------------------------------

// streams 
// streams are used to read and write data in chunks

// app.get('/', (req,res)=>{
//     const stream = fs.createReadStream("./text.txt",'utf-8');
//     stream.on("data",(chunk)=> res.write(chunk));
//     stream.on('end',()=>res.end)
// })

// app.listen(3000)