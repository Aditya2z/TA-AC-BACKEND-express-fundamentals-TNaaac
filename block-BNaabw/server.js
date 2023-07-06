var express = require("express");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var app = express();


app.use(logger("dev"));
app.use(express.urlencoded({extended : false}));
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use(cookieParser());
app.use((req, res, next) => {
    var count = req.body.count;
    res.cookie("count", 1);
    next();
})
app.use("/admin", (req, res, next) => {
    next("Access Unauthorised!");
})

app.get("/users/:username", (req, res, next) => {
    res.send(`<h2>${req.params.username}<h2>`);
})

app.get(["/", "/index.html"], (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get(["/about", "/about.html"], (req, res) => {
    res.sendFile(__dirname + "/public/assets/pages/about.html");
});

app.get(["/blog", "/blog.html"], (req, res) => {
    res.sendFile(__dirname + "/public/assets/pages/blog.html");
});

app.get(["/cases", "/cases.html"], (req, res) => {
    res.sendFile(__dirname + "/public/assets/pages/cases.html");
});

app.get(["/contact", "/contact.html"], (req, res) => {
    res.sendFile(__dirname + "/public/assets/pages/contact.html");
});

app.get(["/services", "/services.html"], (req, res) => {
    res.sendFile(__dirname + "/public/assets/pages/services.html");
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