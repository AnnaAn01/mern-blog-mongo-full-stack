import User from "../models/User.js";
import bcrypt from "bcryptjs";

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
  } catch (err) {
    console.log(err);
  }
};
// Login user
export const login = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
  }
};
// Get me
export const getMe = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
  }
};
