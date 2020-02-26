const Sequelize = require("sequelize");
const db = require("../db");

const Player = db.define("player", {
  name: {
    type: Sequelize.STRING,
    allownull: false
  },
  number: {
    type: Sequelize.INTEGER
  }
});

module.exports = Player;
