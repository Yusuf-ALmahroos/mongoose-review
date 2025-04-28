const mongoose = require('mongoose');

require('dotenv').config();

async function connect()
{
  try 
  {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Successfully connected to MongoDB");
  } 
  catch(error) 
  {
    console.error(`Failed connecting to MongoDB ${error.message}`)
  }
}

connect();

module.exports = mongoose.Connection;