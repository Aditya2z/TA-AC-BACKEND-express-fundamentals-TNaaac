const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

const app = express();

// Middleware
app.use(cookieParser());
app.use(morgan('dev'));

// Custom Middleware to set a cookie on /about route
app.use('/about', (req, res, next) => {
  res.cookie('username', 'Aditya');
  next();
});

// Route to fetch all cookies
app.get('/cookies', (req, res) => {
  const cookies = req.cookies;
  res.json(cookies);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

