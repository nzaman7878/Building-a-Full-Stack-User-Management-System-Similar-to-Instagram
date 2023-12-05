// Importing the Express framework
const express = require("express");

// Importing user controller functions and middleware
const { userSignUp, userLogin, getUserDetails } = require("../controller/user.controller");
const { signupValidator } = require("../middleware/signup.validator");
const { loginValidator } = require("../middleware/login.validator");
const { authenticateUser } = require("../middleware/authenticateUser.js");

// Creating an Express router for user-related routes
const userRoute = express.Router();

// Route for user signup with validation middleware
userRoute.post("/signup", signupValidator, userSignUp);

// Route for user login with validation middleware
userRoute.post("/login", loginValidator, userLogin);

// Route for getting user details with authentication middleware
userRoute.get("/", authenticateUser, getUserDetails);

// Exporting the userRoute for use in other parts of the application
module.exports = {
    userRoute
};
