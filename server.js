const express = require("express");
const app = express();
const fs = require("fs");
const fetch = require("node-fetch");
const dotenv = require("dotenv");
const uuid = require("uuid");

dotenv.config({ path: "./config.env" });
const port = process.env.PORT || 3000;

require("./database/db");

const cfContestsDetails = require("./models/userSchema");

app.get("/", (req, res) => {
  res.send("hi form the server");
});

// const createJson= (filePath, data)=>{
//      const dataJson=JSON.stringify(data, null, 2)
//      fs.writeFile(`./json/${filePath}.json`,dataJson,  (error)=>{
//      if(error)
//      console.log(error);
//     })

//     console.log("ab done");
// }

app.get("/contests/codeforces", async (req, res) => {
  const response = await fetch("https://kontests.net/api/v1/codeforces");
  const resData = await response.json();
  // console.log(resData);

  // const data=resData.data.map(item=>{

    try {
        const { name, url, start_time, end_time, duration, in_24_hours, status } = body.req
        
        if (!name || !url || !start_time || !end_time || !duration || !in_24_hours || !status) {
            res.status(400).send({})
        }

        const cfContest = new cfContestsDetails({ name, url, start_time, end_time, duration, in_24_hours, status })
        
      
    await cfContests.save();
  } catch (error) {
    console.log(error);
  }

  // createJson("codeforces",resData );
  res.status(200).send({ resData });
});

//for reading
// fs.writeFile("./cfApi.json", "utf-8", (err, data)=>{
//     console.log(data);
// })

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
