const express = require('express');
const { connection } = require('./config/db');
const SuperheroModel = require('./Model/superhero.model');
const usersModel = require('./Model/signup');
const cors = require('cors');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const app = express();
const bcrypt = require('bcrypt');
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

app.get("/superhero/Get", async (req, res) => {
  console.log(req.query);
  try {
    let result = await SuperheroModel.find();
    console.log(result,"result");
    res.send({ msg: "Fetched the data successfully", data: result })
  } catch (error) {
    console.log(error);
    res.send(error)
  }
});

//created by 
app.get("/superhero/Get/byuser", async (req, res) => {
  const user = req.query.createdby
  try {
    let result = await SuperheroModel.find({Created_by:user});
    console.log(result,"result");
    res.send({ msg: "Fetched the data successfully", data: result })
  } catch (error) {
    console.log(error);
    res.send(error)
  }
});


// Other superhero routes (GET by ID, POST, PUT, DELETE) should follow...
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


const signUpSchema = Joi.object({
  username: Joi.string().required().min(3),
  password: Joi.string().required().min(3), // Minimum password length
});

// Get: user data
app.get('/superhero/signup/Get', async (req, res) => {
  try {
    const users = await usersModel.find();
    res.status(200).send(users);
  } catch (error) {
    console.log('Error getting the data:', error);
    res.status(500).json({ error: 'Failed to get users' });
  }
});

// POST: Add one user
app.post('/superhero/signup', async (req, res) => {
  try {
    const { error, value } = signUpSchema.validate(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const existingUser = await usersModel.findOne({ username: req.body.username });
    if (existingUser) {
      return res.status(409).send('Username already exists');
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = new usersModel({
      username: req.body.username,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(201).send({ msg: "User created successfully" });
  } catch (error) {
    console.log('Error posting the data:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
});

// Login endpoint
app.post('/login', async (req, res) => {
  try {
    const { error } = Joi.object({
      username: Joi.string().required(),
      password: Joi.string().required(),
    }).validate(req.body);

    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const user = await usersModel.findOne({ username: req.body.username });
    if (!user) {
      return res.status(401).send('Invalid username or password');
    }

    const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
    if (!isPasswordValid) {
      return res.status(401).send('Invalid username or password');
    }

    const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.cookie('token', token, { maxAge: 3600000, httpOnly: true });
    res.status(200).send({ token });
  } catch (error) {
    console.log('Error during login:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Logout endpoint
app.get('/logout', (req, res) => {
  res.clearCookie('token');
  res.status(200).send('Logged out');
});

// Other routes and middleware should follow...

app.listen(port, async () => {
  try {
    await connection;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
  console.log(`🚀 Server running on PORT: ${port}`);
});

module.exports = app;