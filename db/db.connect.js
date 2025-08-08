const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGODB_CONNECT)
    .then(() => console.log("connected to db..."))
    .catch((err) =>
      console.log("Error occured while connecting to the db: ", err.message)
    );
};

module.exports = connectDB;
