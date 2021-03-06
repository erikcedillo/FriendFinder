// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var htmlRoutes = require("./app/routing/htmlRoutes");
var apiRoutes = require("./app/routing/apiRoutes");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Static routing 
app.use(express.static(__dirname + "/app/public/"));

app.use("/", apiRoutes);
app.use("/", htmlRoutes);

app.use(function(req, res, next) {
  var err = new Error('Uh uh! Something went wrong...');
  err.status = 404;
  next(err);
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT );
});

  