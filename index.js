const express = require('express');
const app = express();
const bodyParser = require("body-parser");

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded( {extended: true} ))


app.get("/", (req,res)=>{
    return res.send({message:"abc"})
});


app.listen(process.env.PORT, () => {
    console.log(`Server running at ${process.env.PORT}`);
});