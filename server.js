const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
var bodyParser = require("body-parser");
require("dotenv").config();

// Database
var db = require("./models");

// Serve up static assets 
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./routes/api-routes.js")(app);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// START SERVER
db.sequelize.sync().then( function() {
  app.listen(PORT, function() {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
  });
})