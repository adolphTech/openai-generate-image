const express = require("express");
const dotenv =require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();

// enable body-parser
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use("/openai",require("./routes/openai.routes"))

app.listen(port,()=>{
 console.log(`App listening on ${port}`)
})