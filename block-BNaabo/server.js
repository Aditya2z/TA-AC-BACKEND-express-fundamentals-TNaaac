var express = require("express");
var app = express();

app.listen(3000, () => {
    console.log("Server is listening to port 3000");
})

app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.post("/json", (req, res) => {
    res.send(req.body);
})

app.post("/contact", (req, res) => {
    res.send(req.body);
})

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.use(express.static(__dirname + "/public"));
