// Importing the jsonwebtoken library
const JWT = require("jsonwebtoken");

// Middleware function to authenticate users
exports.authenticateUser = async (req, res, next) => {
    // Extracting the token from the request cookies or setting it to null if not present
    const token = req.cookies?.token || null;

    // Check if the token is missing
    if (!token) return res.status(404).send({ msg: "User authentication failed", token: req.cookies });

    try {
        // Verifying the token using the secret key
        const payload = JWT.verify(token, process.env.SECRET);

        // Assigning user information from the payload to the request object
        req.user = { id: payload.id, username: payload.username };

        // Continue to the next middleware or route handler
        next();
    } catch (error) {
        // Handling errors if the token verification fails
        return res.status(400).json({ success: false, message: error.message });
    }
};
