const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// ROUTES
app.use("/api/auth", require("./routes/auth"));
app.use("/api/sensor", require("./routes/sensor"));


// DB
mongoose.connect("mongodb://127.0.0.1:27017/smartsense")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

// SERVER
app.listen(5000,()=>{
    console.log("Server running on port 5000");
});
