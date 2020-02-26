const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const db = require("./db");
const team = require("./Teams/model");

app.listen(port, () => console.log(`This app is running on port ${port}`));
