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

const users = [];

// Signup Route
app.post('/signup', (req, res) => {
  const { email, password } = req.body;

  const userExists = users.find(user => user.email === email);
  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Save user to the "database"
  users.push({ email, password });


  // Handle signup logic here, e.g., save the user to the database
  console.log('User signed up:', { email, password });

  // Send a response back to the client
  res.json({ message: 'User signed up successfully' });
});

// Signin Route
app.post('/signin', (req, res) => {
    const { email, password } = req.body;
    // Check if user exists
    const user = users.find(user => user.email === email && user.password === password);
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
  
  // Handle signin logic here, e.g., verify user credentials
  console.log('User signed in:', { email, password });

  // Send a response back to the client
  res.json({ message: 'User signed in successfully' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

