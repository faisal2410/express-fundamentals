const express = require('express');
// const path = require('path');
const app = express();
const helmet = require('helmet');
app.use(helmet())

app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({ extended: false }));






app.listen(3000);
console.log("Server run successfully");