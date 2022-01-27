const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    url: {
        type: String,
        required: [true, "Url is required"],
    },
    start_time: {
        type: Date,
        required: [true, "Start time is required"],
    },
    end_time: {
        type: Date,
        required: [true, "End time is required"],
    },
    duration: {
        type: Number,
        required: [true, "Duration is required"],
    },
    in_24_hours: {
        type: Boolean,
        required: [true, "In 24 house is required"],
    },
    status: {
        type: String,
        required: [true, "Status is required"],
    }

})

const cfContests = mongoose.model("contest/codeforces", userSchema);

module.exports = cfContests;

