// Middleware function for login input validation
exports.loginValidator = (req, res, next) => {
    // Destructuring username and password from the request body
    const { username, password } = req.body;

    // Checking if the request body and both username and password are present
    if (req.body && username && password) {
        // If all conditions are met, proceed to the next middleware or route handler
        next();
    } else {
        // If any of the conditions are not met, send a response indicating that all input fields are required
        res.status(404).send({ msg: "All input fields are required" });
    }
};
