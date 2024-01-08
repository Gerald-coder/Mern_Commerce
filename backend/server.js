const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 5000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5174/", "https://ecommerce-app.vercel.app"],
    credentials: true,
  })
);

// Routes
app.get("/", (req, res) => {
  res.send("hello world");
});
app.post("/users", (req, res) => {
  res.send("sending data to my API");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`connection created, server running on port ${PORT}`);
    });
  })
  .catch((err) => console.error(err));

// mongoose.connection.once("open", () => {
//   console.log("connections created");
//   app.listen(PORT, () => console.log(`listening to port ${PORT}`));
// });
