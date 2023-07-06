var express = require("express");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var app = express();


app.use(logger("dev"));
//Capturing form data
app.use(express.urlencoded({extended : false}));
//Capturing json data
app.use(express.json());

app.use(cookieParser());

app.use((req, res, next) => {
    res.cookie("count", 1);
    next();
})

app.use("/admin", (req, res, next) => {
    next("Access Unauthorised!");
})

app.get("/users/:username", (req, res, next) => {
    res.send(`<h2>${req.params.username}<h2>`);
})

app.get("/", (req, res) => {
    res.send("<h2>Welcome to express</h2>");
});

app.get("/about", (req, res) => {
    res.send("My name is Aditya");
});
//Sending form
app.get("/form", (req, res) => {
    res.sendFile(__dirname + "/form.html");
});
//Submitting form data
app.post("/form", (req, res) => {
    res.send(req.body);
});
app.post("/json", (req, res) => {
    res.send(req.body);
});

app.use((req, res, noext) => {
    res.send("Page not found!");
})

app.use((err, req, res, next) => {
    res.status(500).send(err);
})

app.listen(3000, () => {
    console.log("Server is listening to port 3000");
});