const express = require('express');
const path = require('path');
const app = express();
const helmet = require('helmet');
const multer = require('multer');
const upload=multer();
app.use(helmet())

app.use(upload.array())
app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// app.post("/",(req,res)=>{   
//     const jsonData=req.body;
//     console.log(jsonData);
//     // res.send(JSON.stringify(jsonData));
//     res.json(jsonData);

// })
app.post("/",(req,res)=>{   
    const jsonData=req.body;
    console.log(jsonData);
    // res.send(JSON.stringify(jsonData));
    res.json(jsonData);

})





app.listen(3000)
console.log("Server Run Success")