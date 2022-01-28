const mongoose = require("mongoose");
const validator = require("validator");

const hackathonSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: [true, "Name is required"],
  },
  open_state: {
    type: String,
    required: [true, "Url is required"],
  },
  thumbnail_url: {
    type: String,
    required: [true, "Start time is required"],
  },
  analytics_identifier: {
    type: String,
    required: [true, "End time is required"],
  },
  url: {
    type: String,
    required: [true, "Duration is required"],
  },
  time_left_to_submission: {
    type: String,
    required: [true, "In 24 house is required"],
  },
  submission_period_dates: {
    type: String,
    required: [true, "Status is required"],
  },
  prize_amount: {
    type: String,
    required: [true, "Status is required"],
  },
  registrations_count: {
    type: Number,
    required: [true, "Status is required"],
  },
  featured: {
    type: Boolean,
    required: [true, "Status is required"],
  },
  organization_name: {
    type: String,
    required: [true, "Status is required"],
  },
  winners_announced: {
    type: Boolean,
    required: [true, "Status is required"],
  },
  submission_gallery_url: {
    type: String,
    required: [true, "Status is required"],
  },
  start_a_submission_url: {
    type: String,
    required: [true, "Status is required"],
  },
  invite_only: {
    type: Boolean,
    required: [true, "Status is required"],
  },
});

const latestHackathon = new mongoose.model(
  "latestHackathons",
  hackathonSchema
);
module.exports = latestHackathon;
