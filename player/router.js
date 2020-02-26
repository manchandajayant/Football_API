const Player = require("./model");
const { Router } = require("express");
const router = new Router();

router.get("/player", (req, res, next) => {
  //console.log("this is getting them", attributes);
  Player.findAll({ attributes: ["name"], raw: true })
    .then(player => {
      res.json(player);
    })
    .catch(next);
});

router.post("/player", (req, res, next) => {
  console.log("this is a post", req.body);
  Player.create(req.body)
    .then(Player => res.json(Player))
    .catch(next);
});

router.get("/player/:id", (req, res, next) => {
  Player.findByPk(req.params.id)
    .then(user => {
      res.json(user);
    })
    .catch(next);
});

module.exports = router;
