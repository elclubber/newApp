
// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const connectionString = 'mongodb+srv://elclubber2:12345@cluster0-wctlx.gcp.mongodb.net/test?retryWrites=true&w=majority';

// this will be our data base's data structure 
const DataSchema = new Schema(
  {
    id: Number,
    message: String
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Data", DataSchema);