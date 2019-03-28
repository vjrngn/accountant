const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const { assert, expect } = require("chai");

/** Load test enviroment variables */
dotenv.config({
  // TODO: ensure .env.test exists, else alert the user that one must be created
  path: path.join(__dirname, "..", ".env.test")
});

const { DB_NAME, DB_HOST, DB_PORT } = process.env;

before(async function globalSetup() {
  /** setup globals */
  global.assert = assert;
  global.expect = expect;

  /** setup mongo connection */
  await mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
    useNewUrlParser: true
  });
});

after(async function globalTeardown() {
  /** clean up globals */
  delete global.assert;
  delete global.expect;

  /** drop the test database */
  await mongoose.connection.db.dropDatabase();
  /** terminate mongo connection */
  await mongoose.connection.close();
});
