const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const cors = require('cors')

//controllers
const userController = require("./controllers/userController");

//Express request pipeline
const app = express();
app.use(express.static(path.join(__dirname, "../app/dist")));
app.use(bodyParser.json())
app.use(cors()) // Without this, can't make cross-origin requests (e.g., from localhost:3000 -> localhost:7777
app.use("/api", userController);

app.get('/', function(req, res){
  res.send('Hello World');
});

app.listen(7777, function () {
    console.log("Started listening on port", 7777);
});

// Connect to mongodb database
mongoose.connect("mongodb://localhost/userfinder");

/*
 * Front end makes a POST request to http://localhost:7777/api/users
 * with information about the user to be created in the POST body, e.g.:
 * fetch('http://localhost:7777/api/users', {
     method: 'POST',
     body: JSON.stringify({
       firstName: 'Camille',
       lastName: 'Jackson',
       isCool: false,
       isReallyLame: true
     })
   })
     .then(data => data.json())
     .then(json => Do some stuff)

 * In the function that handles that route in your UsersController (back end),
 * you'll probably want to parse the JSON you receive from the front end, and then
 * (through Mongoose) make a request to MongoDB to create a new "document" (a new
 * user in the database) with those same details.
 */
