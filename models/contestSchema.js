const mongoose = require("mongoose");
const validator = require("validator");

const contestSchema = new mongoose.Schema({
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
    type: Number,
    required: [true, "Duration is required"],
  },
  in_24_hours: {
    type: Boolean,
    required: [true, "In 24 house is required"],
    validate(value) {
      if (!validator.isBoolean(value))
        throw new Error("In 24 hours must be a boolean");
    },
  },
  status: {
    type: String,
    required: [true, "Status is required"],
  },
});

const Contest = new mongoose.model("Contest", contestSchema);

module.exports = Contest;
