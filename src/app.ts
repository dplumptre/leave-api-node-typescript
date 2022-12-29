import express from "express";
import bodyParser from "body-parser"; 
const departmentRoutes  = require("./routes/department");

const app = express();
app.use(bodyParser.json());


app.use("/api",departmentRoutes);

app.listen(3005,()=>{
    console.log('we are live');
});