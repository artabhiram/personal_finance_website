const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const financialRecordRoute = require('./routes/financial-records');
const cors = require('cors');

dotenv.config();

const app = express();

// CORS configuration
app.use(cors({
  origin: 'https://personal-finance-website-h5xy.onrender.com', // replace with your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],  // Add headers if necessary
}));

// Middleware setup
app.use(express.json());

// API route
app.use('/financial-records', financialRecordRoute);

// Test route
app.get('/', (req, res) => {
  res.send('Welcome to the Backend');
});

// Database connection
async function main() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connection Successful");
  } catch (err) {
    console.log("Error connecting to MongoDB:", err);
  }
}

main();

// Hardcoding the port number instead of using process.env.PORT
const PORT = 3000; // Directly specifying the port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
