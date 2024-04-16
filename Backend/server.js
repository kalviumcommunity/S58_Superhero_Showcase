const express = require('express');
const { connection } = require('./config/db');
const SuperheroModel = require('./Model/superhero.model');
const cors = require('cors');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const app = express();
const cookieParser = require('cookie-parser');
require("dotenv").config();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(cookieParser());

const superheroSchema = Joi.object({
  Superhero_Name: Joi.string().required(),
  Category: Joi.string().required(),
  First_appearance: Joi.string().required(),
  Images: Joi.string().uri().required()
});

app.get("/superhero/Get",async(req,res)=>{
  try {
    let result=await SuperheroModel.find();
    res.send({msg:"Fetched the data successfully",data:result})
  } catch (error) {
    console.log(error);
    res.send(error)
  }
});

app.get("/superhero/Get/:id",async(req,res)=>{
  console.log(req.params.id);
  try {
    let result=await SuperheroModel.find({_id:req.params.id});
    res.send({msg:"Fetched the data successfully",data:result})
  } catch (error) {
    console.log(error);
    res.send(error)
  }
});

app.post("/superhero/Post",async(req,res)=>{
  let payload=req.body;
  const { error } = superheroSchema.validate(payload);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
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
  const { error } = superheroSchema.validate(payload);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
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

// Login endpoint
app.post('/login', (req, res) => {
  const { error } = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  }).validate(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  const user = { username: req.body.username, password: req.body.password };

  if (user) {
    jwt.sign(user.username, 'dog12', function(error, token){
      if(error){
        res.status(401).send(error);
      }
      else{
        res.cookie('username', token, { maxAge: 900000, httpOnly: true });
        res.status(200).send(token);
      }
    })
  } else {
    res.status(401).send('Invalid username or password');
  }
});


// Logout endpoint
app.get('/logout', (req, res) => {
  res.clearCookie('username');
  res.status(200).send('Logged out');
});


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