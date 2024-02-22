const express = require('express');
const { connection } = require('./config/db');
const SuperheroModel = require('./Model/superhero.model');
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/superhero/Get",async(req,res)=>{
  try {
    let result=await SuperheroModel.find();
    res.send({msg:"Fetched the data successfully",data:result})
  } catch (error) {
    console.log(error);
    res.send(error)
  }
});


app.post("/superhero/Post",async(req,res)=>{
  let payload=req.body;
   try {
    await SuperheroModel.create(payload);
    res.send({msg:"Posted the data successfully"})
   } catch (error) {
      console.log(error);
      res.send(error);
   }
});


app.put("/superhero/Update/:id",async(req,res)=>{
  let payload=req.body;
  let id=req.params.id;
   try {
    await SuperheroModel.findByIdAndUpdate(id,payload);
    res.send({msg:"Updated the data successfully"})
   } catch (error) {
      console.log(error);
      res.send(error);
   }
});

app.delete("/superhero/Delete/:id",async(req,res)=>{
  let id=req.params.id;
   try {
    await SuperheroModel.findByIdAndDelete(id);
    res.send({msg:"Deleted the data successfully"})
   } catch (error) {
      console.log(error);
      res.send(error);
   }
})

app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

app.listen(port, async() => {
  try {
    await connection;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
  console.log(`🚀 server running on PORT: ${port}`);
});

module.exports = app;