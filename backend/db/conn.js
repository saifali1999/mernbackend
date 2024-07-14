// const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/mern_homepage", {
//      useNewUrlParser:true,
//     // useUnifiedTopology:true
// }).then(() => {
//     console.log("Connection is successful !!")
// }).catch((e) => {
//     console.log("Not Connected !!")
// })

const mongoose = require("mongoose");
require('dotenv').config(); // Add this line to load environment variables

const dbConnectionString = process.env.DB_CONNECTION_STRING || "mongodb://localhost:27017/mern_homepage";

mongoose.connect(dbConnectionString, {
 useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000 // 30 seconds
}).then(() => {
  console.log("Connection is successful !!");
}).catch((e) => {
  console.log("Not Connected !!", e);
});
