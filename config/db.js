const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');
const gravatar = require('gravatar');

const connectDB = async () => {
  try {
    await mongoose.connect(db);

    console.log('MongoDB connected...');
  } catch (err) {
    console.log(err.message);
    console.log("Couldn't connect to the database");
    process.exit(1);
  }
};

module.exports = connectDB;
