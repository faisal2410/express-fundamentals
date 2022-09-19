const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const helmet = require('helmet');
const multer = require('multer');
const upload = multer({ dest:'./uploads' })

app.use(helmet())
app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.post('/uploadFile',upload.single('myfile'), function(req, res, next) {
    //  fs.rename(oldPath,newPath,callback)
    // const newPath=`./uploads/${Date.now()} ${req.file.originalname}`
    const newPath=`./uploads/${req.file.originalname}`
    fs.rename(req.file.path,newPath,(err)=>{
        if(err){
            // throw err;
            console.log(err);
        }else{
            res.json({
                message: 'File Uploaded',
                field:req.body,
                image:req.file
    
            });
        }
        
    })
    // res.json({
    //     field:req.body,
    //     image:req.file
    // });
    // console.log(req.file.originalname);
  });
  
  app.post('/uploadFiles',upload.array('photos', 12), function(req, res, next) {
    const newPath=`./uploads/${req.files[0].originalname}`
    const newPath2=`./uploads/${req.files[1].originalname}`
    fs.rename(req.files[0].path,newPath,(err)=>{
        if(err){
            throw err;
        }
    })
    fs.rename(req.files[1].path,newPath2,(err)=>{
        if(err){
            throw err;
        }
    })
    res.json({
        field:req.body,
        image:req.files
    });
    console.log(req.files);
  });
  app.post('/uploadMultipleFiles',upload.fields(
    [{ name: 'avatar', maxCount: 1 }, 
    { name: 'gallery', maxCount: 8 }]), 
    function(req, res, next) {
    const newPath=`./uploads/${req.files[0].originalname}`
    const newPath2=`./uploads/${req.files[1].originalname}`
    res.json({
        field:req.body,
        image:req.files
    });
    console.log(req.files);
  });


  app.listen(3000)
console.log("Server Run Success")