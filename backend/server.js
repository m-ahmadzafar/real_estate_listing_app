const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // Allow requests from your frontend URL
}));
app.use(bodyParser.json());

// Signup Route
app.post('/signup', (req, res) => {
  const { email, password } = req.body;

  // Handle signup logic here, e.g., save the user to the database
  console.log('User signed up:', { email, password });

  // Send a response back to the client
  res.json({ message: 'User signed up successfully' });
});

// Signin Route
app.post('/api/signin', (req, res) => {
  const { email, password } = req.body;

  // Handle signin logic here, e.g., verify user credentials
  console.log('User signed in:', { email, password });

  // Send a response back to the client
  res.json({ message: 'User signed in successfully' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

