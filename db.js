const Sequelize = require("sequelize");
const databaseUrl =
  process.env.DATABASE_URL || "postgres://postgres:jay@localhost:5432/postgres";
const db = new Sequelize(databaseUrl);

db.sync()
  .then(() => console.log("congratulations, you were finally able to do this"))
  .catch(console.error);

module.exports = db;
