var express = require("express");
var app = express();

//Middleware similar to morgan
function logger(req, res, next) {
  console.log(req.method, req.url, req.headers);
  next();
}

app.use(logger);

//Middleware similar to express.json
function jsonParser(req, res, next) {
  var store = "";
  req.on("data", (chunk) => {
    store += chunk;
  });
  req.on("end", () => {
    try {
      req.body = JSON.parse(store);
      next();
    } catch (error) {
      next(error);
    }
  });
}

app.use(jsonParser);

//Middleware Similar to express.static
function static(req, res, next) {
    let pathname = req.url;
    res.sendFile(__dirname + `/public/${pathname}`);
}

app.use(static);

app.post("/", (req, res) => {
  res.send(req.body);
});

app.listen(3000, () => {
  console.log("Server is listening to port 3000");
});

function errorHandler(err, req, res, next) {
  console.error(err);
  res.status(400).send(err);
}
