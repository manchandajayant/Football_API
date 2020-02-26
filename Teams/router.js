const { Router } = require("express");
const Team = require("./model");

const router = new Router();

router.get("/team", (req, res, next) => {
  Team.findAll({ attributes: ["name"], raw: true })
    .then(teams => {
      res.json(teams);
    })
    .catch(next);
});

module.exports = router;
