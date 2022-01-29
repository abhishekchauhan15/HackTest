const mongoose = require("mongoose");
const validator = require("validator");

const contestSchema = new mongoose.Schema({
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


const topcoderSchema = new mongoose.Schema({
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


const ContestsDetails = new mongoose.model("Contest", contestSchema);
// const codeforcesDetails = new mongoose.model("codeforcesDetails", contestSchema);
// const codeforcesgymDetails = new mongoose.model("codeforcesgymDetails", contestSchema);
// const topcoderDetails = new mongoose.model("topcoderDetails", topcoderSchema);
// const atcoderDetails = new mongoose.model("atcoderDetails", contestSchema);
// const codechefDetails = new mongoose.model("codechefDetails", contestSchema);
// const csacademyDetails = new mongoose.model("csacademyDetails", contestSchema);
// const hackerrankDetails = new mongoose.model("hackerrankDetails", contestSchema);
// const hackerearthDetails = new mongoose.model("hackerearthDetails", contestSchema);
// const kickstartDetails = new mongoose.model("kickstartDetails", contestSchema);
// const leetcodeDetails = new mongoose.model("leetcodeDetails", contestSchema);

module.exports =  ContestsDetails;
