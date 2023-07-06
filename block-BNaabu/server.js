var express = require("express");
var app = express();

app.get("/", (req, res) => {
    res.send("Welcome to homepage");
});

app.get("/about", (req, res) => {
    res.send("Welcome to About page");
})

app.use((req, res, next) => {
    res.send("Page not found!");
    next();
})

app.use((error, req, res, next) => {
    res.send(error);
})

app.use("/admin", (req, res, next) => {
    next("Unauthorised");
}) // this error handler runs only if the req url is "/admin" otherwise it is skipped


app.use((req, res, next) => {
    if (req.url === "/admin") {
      return next("Unauthorized");
    }
    next();
  }); // this error handler runs for every incoming request and handles the request if req url is "/admin" else it calls the next function

app.listen(3000, () => {
    console.log("Server is listening to port 3000");
});