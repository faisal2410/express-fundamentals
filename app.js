const express = require('express');
const path = require('path');
const app = express();
const helmet = require('helmet');
app.use(helmet())

app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({ extended: false }));


/**
The res object represents the HTTP response that an Express app sends when it gets an HTTP request.

*/ 

// Response Status Code
app.get("/four", function (req, res) {
    res.status(201).end();
})



// JSON Response

/**
res.json([body])
Sends a JSON response. This method sends a response (with the correct content-type) that is the parameter converted to a JSON string using JSON.stringify().

The parameter can be any JSON type, including object, array, string, Boolean, number, or null, and you can also use it to convert other values to JSON.
res.json(null)
res.json({ user: 'tobi' })
res.status(500).json({ error: 'message' })

*/ 
app.get("/four", function (req, res) {
    let myJSONArray = [
        {
            name: "Rabbil",
            city: "Dhaka",
            occupation: "Engr."
        },
        {
            name: "Rakib",
            city: "Dhaka",
            occupation: "Pharama"
        },
        {
            name: "Rifat",
            city: "Rangpur",
            occupation: "Student"
        }

    ]
    res.json(myJSONArray);
})



// Response Download
app.get("/five", function (req, res) {
    res.download("./uploads/abc.jpg");
})



// Response Redirect
app.get("/Bangladesh", function (req, res) {
    res.redirect("http://localhost:3000/India")
})


app.get("/India", function (req, res) {
    res.send("This is india");
})



app.get("/Six", function (req, res) {
    res.append("name", "Rabbil Hasan");
    res.append("city", "Dhaka");
    res.append("age", "30 Years Old");
    res.append('Link', ['<http://localhost/>', '<http://localhost:3000/>'])
    res.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly')
    res.append('Warning', '199 Miscellaneous warning')
    res.status(201).end("Hello World");
})



app.get("/Seven", function (req, res) {
    res.cookie('name', 'Rabbil')
    res.cookie('city', 'Dhaka')
    res.cookie('age', '30 years old')
    res.end("cookie set success")

})


app.get("/Eight", function (req, res) {

    res.clearCookie('name')
    res.clearCookie('age');
    res.clearCookie('city')


    res.end("cookie clear success")

})

app.get('/user/:id', function (req, res) {
    res.send('user ' + req.params.id)
})

app.get('/user/:id', function (request, response) {
    response.send('user ' + request.params.id)
})

app.listen(3000)
console.log("Server Run Successfully")