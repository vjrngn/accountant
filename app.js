require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const { ApolloServer } = require("apollo-server-express");
const resolvers = require("./resolvers");
const schemas = require("./schemas");

const {
  APP_ENV = "development",
  DB_NAME = "accountant",
  DB_HOST = "localhost",
  DB_PORT = 27017,
} = process.env;

mongoose.connect(
  `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  { useNewUrlParser: true }
);

const apolloServer = new ApolloServer({
  typeDefs: schemas,
  resolvers,
  playground: APP_ENV !== "production"
});

const app = express();
app.disable("x-powered-by");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

apolloServer.applyMiddleware({ app });

module.exports = app;
