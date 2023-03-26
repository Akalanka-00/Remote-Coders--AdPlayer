const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
var path = require("path");


dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.listen(process.env.PORT,()=>{
    console.log('server started in port : ',process.env.PORT)
  })