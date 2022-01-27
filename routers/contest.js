const express = require("express");
const router = new express.Router();
const fs = require("fs");
const fetch = require("node-fetch");
const uuid = require("uuid");
const ContestsDetails = require("../models/contestSchema");

const apiCalling = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

//getting the contest details
router.get("/contests", async (req, res) => {
  const url = "https://kontests.net/api/v1/codeforces";
  const data = await apiCalling(url);

  try {
    data.map((e, i) => {
      const newContest = new ContestsDetails({
        _id: uuid.v4(),
        name: e.name,
        url: e.url,
        start_time: e.start_time,
        end_time: e.end_time,
        duration: e.duration,
        in_24_hours: e.in_24_hours,
        status: e.status,
      });
      newContest.save();
      // console.log("saved");
    });

    const contestData = await ContestsDetails.find();
    // res.json(contestData);
    res.status(200).json(contestData);
  } catch (error) {
    console.log(error);
  }
});

router.get("/contests/all", async (req, res) => {
    const url = "https://kontests.net/api/v1/all";
    const data = await apiCalling(url);
  
    try {
      data.map((e, i) => {
        const newContest = new ContestsDetails({
          _id: uuid.v4(),
          name: e.name,
          url: e.url,
          start_time: e.start_time,
          end_time: e.end_time,
          duration: e.duration,
          in_24_hours: e.in_24_hours,
          status: e.status,
        });
        newContest.save();
        // console.log("saved");
      });
  
      const contestData = await ContestsDetails.find();
      // res.json(contestData);
      res.status(200).json(contestData);
    } catch (error) {
      console.log(error);
    }
  });

//creating the new contest in the database
router.post("/contests", async (req, res) => {
  try {
    // console.log(req.body);
    const newContest = new ContestsDetails(req.body);
    const createContest = await newContest.save();

    res.status(201).send(createContest);
  } catch (error) {
    res.status(400).send(error);
  }
});

//get by id of the contest
router.get("/contests/:id ", async (req, res) => {
  try {
    const contestId = req.params.id;
    // console.log(contestId);
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

router.get("/contests/:name ", async (req, res) => {
  try {
    const contestName = req.params.name;
    // console.log(contestId);
    const contestData = await ContestsDetails.findOne(contestName);

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

router.delete("/contests/:id", async (req, res) => {
  try {
    const contestId = req.params.id;
    const contestData = await ContestsDetails.findByIdAndDelete(contestId);
    if (!contestId)
      return res
        .status(404)
        .send("The contest with the given ID was not found");

    res.status(200).json(contestData);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.patch("/contests/:id", async (req, res) => {
  try {
    const contestId = req.params.id;
    const contestData = await ContestsDetails.findByIdAndUpdate(
      contestId,
      req.body,
      {
        new: true,
      }
    );

    if (!contestData)
      return res
        .status(404)
        .send("The contest with the given ID was not found");

    res.status(200).json(contestData);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
