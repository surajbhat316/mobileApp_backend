const express = require('express');
const app = express();

const cors = require('cors');

const db = require("./config/mongoose");;

const PORT = 8000;


app.use(cors({origin: "http://localhost:3000",
                methods: "GET,POST,PUT,DELETE",
                credentials: true}))

app.use(express.json());
app.use(express.urlencoded());


app.use("/", require("./routes/index"))


app.listen(PORT, function(err){
    if(err){
        console.log("Error starting the server");
        return;
    }
    console.log("Server running on port ", PORT)
})