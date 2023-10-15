const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");
const app =require('./index')
const { connectDB } = require("./utils/dbConnect");


// database connection
connectDB()

// server
const port = process.env.PORT || 8080;
// app.use("/api/v1/product", ProductRoute)

app.listen(port, () => {
  console.log(`App is running on port ${port}`.yellow.bold);
});

