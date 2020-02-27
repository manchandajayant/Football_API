const Sequelize = require("sequelize");
const db = require("../db");
const Team = require("../Teams/model");

const Player = db.define(
  "player",
  {
    name: {
      type: Sequelize.STRING,
      allownull: false
    },
    number: {
      type: Sequelize.INTEGER
    }
  },
  { tableName: "Football_players" }
);

Player.belongsTo(Team);

module.exports = Player;
