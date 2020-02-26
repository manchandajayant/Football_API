const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const bodyParser = require("body-parser");

const teamRouter = require("./Teams/router");

app.use(teamRouter);
app.use(bodyParser.json());

app.listen(port, () => console.log(`This app is running on port ${port}`));
