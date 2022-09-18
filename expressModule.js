const express = require('express');
const path = require('path');
const app = express();
const helmet=require('helmet');
app.use(helmet())

app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({extended:false}));

// app.all('*',(req, res)=>{    
//     res.send('<h1>Hello World</h1>')
// });

// app.all('*',(req, res)=>{    
//     res.json('<h1>Hello World</h1>')
// });
app.all('*',(req, res)=>{    
    res.json({subject:"Express js Fundamentals", message:"Welcome to Ostad",})
});

// app.all('/',(req, res)=>{    
//     console.log(path.join(__dirname + '/node.html'))
//     res.sendFile(path.join(__dirname + '/node.html'))   
// });

// app.get('/',(req, res)=>{
//     console.log(req)
//     res.send(`<h1>Welcome to the home GET page!`)
// })
// app.post('/',(req, res)=>{
//     res.send(`<h1>Welcome to the home POST page!`)
// })
// app.delete('/',(req, res)=>{

// })
// app.put('/',(req, res)=>{

// })


app.listen(3000)
console.log("Server Run Successfully")
