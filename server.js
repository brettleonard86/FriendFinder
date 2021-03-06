// DEPENDENCIES
// Series of npm packages that we will use to give our server usefull functionality

var express = require ("express");
var bodyParser = require('body-parser');
var path = require("path");

// EXPRESS CONFIGURATION
// This sets up the basic properties for the express server

// Tells Node that I am creating an "express" server
var app = express();

// Sets an initial port to use later in listener
var PORT = process.env.PORT || 8080;

// BodyParser makes it possible for our server to interpret data sent to it
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});