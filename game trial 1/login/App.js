const mongoose = require("mongoose");
const express = require("express");
const app = express();
const db  = "mongodb+srv://saisubratapanigrahi013:y7Cn74RNuqxw5PfF@cluster0.dz6tjjl.mongodb.net/?retryWrites=true&w=majority"; 

mongoose.connect(db,{

}).then(()=>{
    console.log("Connection susccessful");
}).catch((err)=>{
    console.log(err);
})



app.get('/',(req, res) => {
    console.log("This is the homepage"); 
}); 

app.listen(3000,()=>{
    console.log("This server is running at port no 3000");
})