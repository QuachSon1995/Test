const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const PORT = 5001
// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded( {extended: true} ))


app.get("/", (req,res)=>{
    return res.send({message:"abc"})
});


app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
});