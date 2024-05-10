const express = require('express');
const { connection } = require('./config/db');
const app = express();
const port = process.env.PORT || 3000;


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


git 


module.exports = app;