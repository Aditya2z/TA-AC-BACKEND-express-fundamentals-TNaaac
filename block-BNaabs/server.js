var express = require("express");
var app = express();

app.listen(3000, () => {
    console.log("Server is listening to port 3000");
})

// - Add a GET request on '/' route and render 'index.html' file using `res.sendFile`.
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

// - Add a GET request on '/new' route and render new.html with a html form.
app.get("/new", (req, res) => {
    res.sendFile(__dirname + "/new.html");
})

// - add a post request on '/new' route and display submitted form data
app.use(express.urlencoded({ extended: false }));
app.post("/new", (req, res) => {
    res.json(req.body);
})

// - add a route with params to grab request made on `/users/1234` or `/users/asdf`
app.get("/users/:username", (req, res) => {
    res.send(req.params);
})