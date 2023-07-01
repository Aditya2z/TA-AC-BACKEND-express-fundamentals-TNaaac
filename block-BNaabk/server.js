var express = require("express");

var app = express();
app.listen(3000, () => {
    console.log("Server is listening to port 3000");
})

app.get("/", (req, res) => {
    console.log(req);
    res.send("Welcome");
})