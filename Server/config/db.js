// Importing the mongoose library for MongoDB interactions
const mongoose = require("mongoose");

// Loading environment variables from a .env file
require("dotenv").config();

// Function to connect to the MongoDB database
const connectDatabase = () => {
  // Attempt to connect to the MongoDB database using the URL from the environment variables
  mongoose
    .connect(process.env.DB_URL)
    .then((data) => {
      // Log a success message if the connection is established
      console.log(`MongoDB connected with server: ${data.connection.host}`);
    })
    .catch((err) => {
      // Log an error message if there is an issue connecting to the database
      console.log("ERROR while connecting to DB", err.message);
    });
};

// Exporting the connectDatabase function for external use
module.exports = connectDatabase;
