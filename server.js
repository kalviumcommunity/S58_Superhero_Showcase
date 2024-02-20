const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://harshwardhandhoble:Dhoble12%40@cluster0.7sizh2j.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.get('/', (req, res) => {
  res.send(`Database Connection Status: ${db.readyState === 1 ? 'Connected' : 'Disconnected'}`);
});


app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

app.listen(port, () => {
  console.log(`🚀 server running on PORT: ${port}`);
});

module.exports = app;