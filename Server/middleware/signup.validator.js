// Middleware function for signup input validation
exports.signupValidator = (req, res, next) => {
    // Destructuring values from the request body
    const { name, email, password, bio, username } = req.body;

    // Checking if the request body and all required fields are present
    if (req.body && name && email && password && bio && username) {
        // If all conditions are met, proceed to the next middleware or route handler
        next();
    } else {
        // If any of the conditions are not met, send a response indicating that all input fields are required
        res.status(404).send({ msg: "All input fields are required" });
    }
};
