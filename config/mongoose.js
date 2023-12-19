const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://surajbhat316:SdLzxdqs3XsHKq29@mobileappdev.dlhvipl.mongodb.net/?retryWrites=true&w=majority")
const db = mongoose.connection;


db.on("error", console.error.bind(console, "Error Connecting to the database"));


db.once("open" , function(){
    console.log("Connected to the database");
})

module.exports = db;