// Importing necessary modules
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");

// Creating a mongoose schema for the user
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        select: false, // Exclude from default queries
    },
    bio: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    }
});

// Method to generate a JWT token for the user
userSchema.methods = {
    jwtToken() {
        return JWT.sign({ id: this._id, username: this.username }, process.env.SECRET, {
            expiresIn: '24d' // Token expiration time
        });
    }
};

// Pre-save hook to hash the password before saving it to the database
userSchema.pre("save", async function (next) {
    // Check if the password has been modified before hashing
    if (!this.isModified('password')) return next();

    // Hashing the password
    this.password = await bcrypt.hash(this.password, 12);
    return next();
});

// Creating a mongoose model for the user
const UserModel = mongoose.model("user", userSchema);

// Exporting the UserModel for external use
module.exports = { UserModel };
