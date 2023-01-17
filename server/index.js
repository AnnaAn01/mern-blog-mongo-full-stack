// this is the entry point file for our whole server
import express from "express";

const app = express();

app.listen(5000, () => {
  console.log("server started");
});
