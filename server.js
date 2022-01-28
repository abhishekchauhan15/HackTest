const express = require("express");
const app = express();
const dotenv = require("dotenv");
const multer  = require('multer')
const contestRouter = require("./routers/contest");
const hackathonRouter = require("./routers/hackathons");

dotenv.config({ path: "./config.env" });
const port = process.env.PORT || 3000;

require("./database/connection");


app.use(express.json());
app.use(contestRouter);
app.use(hackathonRouter);

app.get("/", (req, res) => {
  res.send("hi form the server");
});

// const createJson = (filePath, data) => {
//   const dataJson = JSON.stringify(data, null, 2);
//   fs.writeFile(`./json/${filePath}.json`, dataJson, (error) => {
//     if (error) console.log(error);
//   });

//   console.log("ab done");
// };

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});

//validata things in user schemema
