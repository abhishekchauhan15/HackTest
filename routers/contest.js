const express = require("express");
const router = new express.Router();
const fs = require("fs");
const fetch = require("node-fetch");
const uuid = require("uuid");
const ContestsDetails = require("../models/schema");
const codeforcesDetails = require("../models/codeforces_schema");
const codeforcesgymDetails = require("../models/codeforcesgym_schema");
const TopcoderDetails = require("../models/topcoder_schema");
// const atcoderDetails = require("../models/atcoder_schema");
const codechefDetails = require("../models/codechef_schema");
// const csacademyDetails = require("../models/csacademy_schema");
const hackerrankDetails = require("../models/hackerrank_schema");
const hackerearthDetails = require("../models/hackerearth_schema");
const kickstartDetails = require("../models/kickstart_schema");
const leetcodeContest = require("../models/leetcode_schema");

const apiCalling = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  // console.log("data fetched done");
  // console.log(data);
  return data;
};

//getting the  details

router.get("/contests/codeforces", async (req, res) => {
  const url = "https://kontests.net/api/v1/codeforces";
  const data = await apiCalling(url);

  try {
    data.map((e, i) => {
      const newContest = new codeforcesDetails({
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

    const contestData = await codeforcesDetails.find();
    // res.json(contestData);
    res.status(200).json(contestData);
  } catch (error) {
    console.log(error);
  }
});

router.get("/contests/codeforcesgym", async (req, res) => {
  const url = "https://kontests.net/api/v1/codeforces_gym";
  const data = await apiCalling(url);

  try {
    data.map((e, i) => {
      const newContest = new codeforcesgymDetails({
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

    const contestData = await codeforcesgymDetails.find();
    // res.json(contestData);
    res.status(200).json(contestData);
  } catch (error) {
    console.log(error);
  }
});

router.get("/contests/topcoder", async (req, res) => {
  console.log("topcoder");
  const url = "https://kontests.net/api/v1/top_coder";
  const data = await apiCalling(url);
  console.log("afet fetching");

  try {
    data.map((e, i) => {
      const newContest = new TopcoderDetails({
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

    const contestData = await TopcoderDetails.find();
    // res.json(contestData);
    res.status(200).json(contestData);
  } catch (error) {
    console.log(error);
  }
});

router.get("/contests/codechef", async (req, res) => {
  const url = "https://kontests.net/api/v1/code_chef";
  const data = await apiCalling(url);

  try {
    data.map((e, i) => {
      const newContest = new codechefDetails({
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

    const contestData = await codechefDetails.find();
    // res.json(contestData);
    res.status(200).json(contestData);
  } catch (error) {
    console.log(error);
  }
});

router.get("/contests/hackerrank", async (req, res) => {
  const url = "https://kontests.net/api/v1/hacker_rank";
  const data = await apiCalling(url);

  try {
    data.map((e, i) => {
      const newContest = new hackerrankDetails({
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

    const contestData = await hackerrankDetails.find();
    // res.json(contestData);
    res.status(200).json(contestData);
  } catch (error) {
    console.log(error);
  }
});

router.get("/contests/hackerearth", async (req, res) => {
  const url = "https://kontests.net/api/v1/hacker_earth";
  const data = await apiCalling(url);

  try {
    data.map((e, i) => {
      const newContest = new hackerearthDetails({
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

    const contestData = await hackerearthDetails.find();
    // res.json(contestData);
    res.status(200).json(contestData);
  } catch (error) {
    console.log(error);
  }
});

router.get("/contests/kickstart", async (req, res) => {
  const url = "https://kontests.net/api/v1/kick_start";
  const data = await apiCalling(url);

  try {
    data.map((e, i) => {
      const newContest = new kickstartDetails({
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

    const contestData = await kickstartDetails.find();
    // res.json(contestData);
    res.status(200).json(contestData);
  } catch (error) {
    console.log(error);
  }
});

router.get("/contests/leetcode", async (req, res) => {
  console.log("inside function");
  const url = "https://kontests.net/api/v1/leet_code";
  const data = await apiCalling(url);
  console.log(data);

  try {
    data.map((e, i) => {
      const newContest = new leetcodeContest({
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

    const contestData = await leetcodeContest.find();
    // res.json(contestData);
    res.status(200).json(contestData);
  } catch (error) {
    console.log(error);
  }
});

router.get("/contests", async (req, res) => {
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

// ----------------------------------------------------------------

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

//  get contest by name
// router.get("/contests/:status", async (req, res) => {
//   try {
//     const contestStatus = req.params.status;
//     console.log(contestId);
//     const contestData = await ContestsDetails.findOne(contestStatus);

//     if (!contestData) {
//       return res
//         .status(404)
//         .send("The contest with the given ID was not found");
//     }

//     console.log(contestData);
//     res.status(200).json(contestData);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

//update contest by id by writing all the feilds + updated one also
router.put("/contests/:id", async (req, res) => {
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

//get contest by id
router.get("/contests/:id", async (req, res) => {
  // console.log(req.params.id);
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

// deleting the contest by id
router.delete("/contests/:id", async (req, res) => {
  try {
    const contestId = req.params.id;
    const contestData = await ContestsDetails.findByIdAndDelete(contestId);
    if (!contestId)
      return res
        .status(404)
        .send("The contest with the given ID was not found");

    res.status(200).send("The contest with the given ID is deleted");
  } catch (error) {
    res.status(500).send(error);
  }
});

//updating the contest by id py giving the update on particula feild
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
