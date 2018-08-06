let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let path = require("path");

//controllers
let userController = require("./controllers/userController");

//Express request pipeline
let app = express();
app.use(express.static(path.join(__dirname, "../app/dist")));
app.use(bodyParser.json())
app.use("/api", userController);

app.listen(7777, function () {
    console.log("Started listening on port", 7777);
});

// Connect to mongodb database
mongoose.connect("mongodb://localhost/userfinder");
