import User from "../models/User.js";

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
