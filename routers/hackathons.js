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

//creating the new contest in the database
router.post("/hackathon", async (req, res) => {
  try {
    // console.log(req.body);
    const newContest = new ContestsDetails(req.body);
    const createContest = await newContest.save();

    res.status(201).send(createContest);
  } catch (error) {
    res.status(400).send(error);
  }
});

//get contest by id
router.get("/hackathon/:id", async (req, res) => {
  // console.log(req.params.id);
  try {
    const contestId = req.params.id;
    console.log(contestId);
    const contestData = await ContestsDetails.findById(contestId);

    if (!contestData) {
      return res
        .status(404)
        .send("The contest with the given ID was not found");
    }

    res.status(200).json(contestData);
  } catch (error) {
    res.status(500).send(error);
  }
});


module.exports = router;
