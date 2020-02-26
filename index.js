const express = require("express");
const bodyParser = require("body-parser");

const team = require("./Teams/model");
const playerRouter = require("./player/router");
const teamRouter = require("./Teams/router");

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(teamRouter);
app.use(playerRouter);

app.post("/echo", (req, res) => {
  console.log("hello", req.body);
});

app.listen(port, () => console.log(`This app is running on port ${port}`));
