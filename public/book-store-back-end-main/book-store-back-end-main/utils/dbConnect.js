
const mongoose = require("mongoose");
const colors = require("colors");

let isConnected = false; // track the connection

 module.exports.connectDB = async () => {
  mongoose.set('strictQuery', true);

  if(isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    await mongoose.connect(process.env.ATLAS_URI, {
      dbName: "book-store",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    isConnected = true;

    console.log('MongoDB connected'.red.bold)
  } catch (error) {
    console.log(error);
  }
}
