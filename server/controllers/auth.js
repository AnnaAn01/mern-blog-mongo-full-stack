import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Register user
export const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    // findOne is provided by mongoose
    const isUsed = await User.findOne({ username });
    if (isUsed) {
      return res.json({
        message: "This username is taken.",
      });
    }

    const salt = bcrypt.genSaltSync(10);
    // we receive this password from the above req.body (const { username, password } = req.body;) abd difficulty is salt
    const hash = bcrypt.hashSync(password, salt);
    // this is a new example of the User model that we created in the models
    // we set password to hash because we don't want the password to be saved in the db, instead we use the hashed pw
    const newUser = new User({
      username,
      password: hash,
    });

    // we register this new user in the bd using mongoose
    await newUser.save();

    // Sending to front-end
    res.json({
      newUser,
      message: "Registration was successful",
    });
  } catch (err) {
    res.json({ err, message: "Error while registering the user!" });
  }
};

// Login user
export const login = async (req, res) => {
  try {
    // this comes from front-end, user input data
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.json({
        message: "User doesn't exist!",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.json({
        message: "Incorrect password!",
      });
    }

    // Check if we're logged in, also needed for protection, to check if we can make posts
    // KWT_SECRET is defined in env file, it's a random string that we created
    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );
  } catch (err) {
    res.json({ err, message: "Login error!" });
  }
};
// Get me
export const getMe = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
  }
};
