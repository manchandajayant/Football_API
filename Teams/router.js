const { Router } = require("express");
const Team = require("./model");
const router = new Router();

router.get("/team", (req, res, next) => {
  //console.log("this is getting them", attributes);
  Team.findAll({ attributes: ["name"], raw: true })
    .then(teams => {
      res.json(teams);
    })
    .catch(next);
});

router.post("/team", (req, res, next) => {
  console.log("this is a post", req.body);
  Team.create(req.body)
    .then(team => res.json(team))
    .catch(next);
});

router.get("/team/:id", (req, res, next) => {
  Team.findByPk(req.params.id)
    .then(user => {
      res.json(user);
    })
    .catch(next);
});

module.exports = router;
