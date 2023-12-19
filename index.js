const express = require('express');
const app = express();

const db = require("./config/mongoose");;

const PORT = 8000;


app.use(express.json());
app.use(express.urlencoded());


app.listen(PORT, function(err){
    if(err){
        console.log("Error starting the server");
        return;
    }
    console.log("Server running on port ", PORT)
})