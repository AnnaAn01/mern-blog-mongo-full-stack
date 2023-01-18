// this is the entry point file for our whole server
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
// So that the backend allows requests from different ip addresses
import cors from "cors";
import authRoute from "./routes/auth.js";

const app = express();
dotenv.config();
// app.listen(5000, () => {
//   console.log("server started");
// });

// Constants
const PORT = process.env.PORT || 3001;
const DB_USER = process.env.DB_USER;
const DB_PASSORD = process.env.DB_PASSORD;
const DB_NAME = process.env.DB_NAME;

// Middleware - a function that adds to the basic express settings - a sort of software glue
// Connecting cors through middleware
// To connect a middleware we use the app that we set abode then the method use
app.use(cors());
// so that we can send json from the front-end
app.use(express.json());

// Routes (this is also like middleware)
// initial route -  http://localhost:3002/
app.use("/api/auth", authRoute);

async function start() {
  try {
    await mongoose.connect(
      `mongodb+srv://${DB_USER}:${DB_PASSORD}@cluster0.j1fhuu9.mongodb.net/${DB_NAME}?retryWrites=true&w=majority"`
    );

    app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
  } catch (err) {
    console.log(err);
  }
}

start();
