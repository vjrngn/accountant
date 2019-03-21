const fs = require("fs");

const schemas = fs
  .readdirSync(__dirname)
  .filter(file => file !== "index.js")
  .map(file => require(`./${file}`));

module.exports = schemas;
