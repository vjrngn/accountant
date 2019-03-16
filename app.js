require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const { ApolloServer } = require("apollo-server-express");
const resolvers = require("./resolvers");
const schemas = require("./schemas");

const { APP_ENV = "development" } = process.env;

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
