const mongoose = require("mongoose");
const validator = require("validator");



const lccontestSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  url: {
    type: String,
    required: [true, "Url is required"],
  },
  start_time: {
    type: String,
    required: [true, "Start time is required"],
  },
  end_time: {
    type: String,
    required: [true, "End time is required"],
  },
  duration: {
    type: String,
    required: [true, "Duration is required"],
  },
  in_24_hours: {
    type: String,
    required: [true, "In 24 house is required"],
  },
  status: {
    type: String,
    required: [true, "Status is required"],
  },
});

const leetcodeContest = new mongoose.model("leetcodeContest", lccontestSchema);
module.exports =  leetcodeContest ;
