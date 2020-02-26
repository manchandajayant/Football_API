const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const bodyParser = require("body-parser");

const teamRouter = require("./Teams/router");

app.use(bodyParser.json());
app.use(teamRouter);

app.post("/echo", (req, res) => {
  console.log("hello", req.body);
});

app.listen(port, () => console.log(`This app is running on port ${port}`));
