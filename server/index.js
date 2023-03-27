const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
var path = require("path");

const admin_routes = require('./routes/admin_routes')


dotenv.config(); //dotenv configuration
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

//Add routings
app.use('/api/admin', admin_routes);


app.get("/", (req, res) => {
    res.json("hello this is backend! home from backend server.");
  });
app.listen(process.env.PORT,()=>{
    console.log('server started in port : ',process.env.PORT)
  })