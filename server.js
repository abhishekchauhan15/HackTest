const express = require("express");
const app = express();
const fs = require("fs");
const fetch = require("node-fetch");
const dotenv = require("dotenv");
const uuid = require("uuid");
var bodyParser = require('body-parser')

dotenv.config({ path: "./config.env" });
const port = process.env.PORT || 3000;

require("./database/connection");

// app.use(bodyParser.json())

// app.use(function (req, res) {
//     res.setHeader('Content-Type', 'text/plain')
//     res.write('you posted:\n')
//     res.end(JSON.stringify(req.body, null, 2))
//   })

const ContestsDetails = require("./models/contestSchema");
// app.use(express.json({

// }))


// app.use(bodyParser.json()) // for parsing application/json
// app.use(bodyParser.urlencoded({ extended: true }))


app.get("/", (req, res) => {
  res.send("hi form the server");
});

const createJson= (filePath, data)=>{
     const dataJson=JSON.stringify(data, null, 2)
     fs.writeFile(`./json/${filePath}.json`,dataJson,  (error)=>{
     if(error)
     console.log(error);
    })

    console.log("ab done");
}

app.get("/contests", async (req, res) => {
  const response = await fetch("https://kontests.net/api/v1/codeforces");
  const resData = await response.json();
  // console.log(resData);

  // createJson("codeforces", resData);


  try {
    console.log(resData);
    const { name, url, start_time, end_time, duration, in_24_hours, status } = resData;

    if (!name || !url || !start_time || !end_time || !duration || !in_24_hours || !status){
      res.status(400).send("all fields are required");
    } else {
      const cfContest = new ContestsDetails({name, url,start_time, end_time, duration, in_24_hours, status});
      console.log("going to save");

      await cfContest.save();
      console.log("saved");
    }

  } catch (error) {
    console.log(error);
  }

  

  // fs.readFile("./json/codeforces.json", "utf-8", (err, data) => {
  //   if (err)
  //     console.log(err);
    
  //   console.log(data);
  // })



  // createJson("codeforces",resData );
  res.status(200).send({ resData });
});



app.post("/contests", (req, res) => {
  console.log(req.body);
})



app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
