const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const dbURI = process.env.MONGODB_URI || "mongodb://localhost/event_management";

mongoose.connect(dbURI, {useNewUrlParser: true});

mongoose.connection.on("connected", function() {
    console.log("Mongoose default connection open to " + dbURI);
});
  
mongoose.connection.on("error", function(err) {
    console.log("Mongoose default connection error: " + err);
});
  
mongoose.connection.on("disconnected", function() {
    console.log("Mongoose default connection disconnected");
});
  
