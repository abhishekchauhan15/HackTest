const express = require("express");
const router = new express.Router();
const fetch = require("node-fetch");
const uuid = require("uuid");
const latestHackathon = require("../models/hackathon_schema");

const apiCalling = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

router.get("/hackathon", async (req, res) => {
  const url = "https://devpost.com/api/hackathons";
  const data = await apiCalling(url);

  try {
    data.hackathons.map((e, i) => {
      const newHackathon = new latestHackathon({
        id: e.id,
        title: e.title,
        url: e.url,
        open_state: e.open_state,
        thumbnail_url: e.thumbnail_url,
        analytics_identifier: e.analytics_identifier,
        url: e.url,
        time_left_to_submission: e.time_left_to_submission,
        submission_period_dates: e.submission_period_dates,
        prize_amount: e.prize_amount,
        registrations_count: e.registrations_count,
        featured: e.featured,
        organization_name: e.organization_name,
        winners_announced: e.winners_announced,
        submission_gallery_url: e.submission_gallery_url,
        start_a_submission_url: e.time_left_to_submission,
        invite_only: e.invite_only,
      });
      newHackathon.save();
      // console.log("saved");
    });

    const hackathonData = await latestHackathon.find();
    // res.json(hackathonData);
    res.status(200).json(hackathonData);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
