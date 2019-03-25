require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const { ApolloServer } = require("apollo-server-express");
const { GraphQLModule } = require("@graphql-modules/core");
const schemas = require("./schemas");
const passport = require("./config/auth");

const {
  APP_ENV = "development",
  DB_NAME = "accountant",
  DB_HOST = "localhost",
  DB_PORT = 27017
} = process.env;

mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
  useNewUrlParser: true
});

const appModule = new GraphQLModule({
  imports: schemas
});

const apolloServer = new ApolloServer({
  schema: appModule.schema,
  context: ({ req, res }) => {
    return {
      req,
      res,
      user: req.user
    };
  },
  playground: APP_ENV !== "production"
});

const app = express();

app.disable("x-powered-by");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());

app.use("/graphql", function(req, res, next) {
  passport.authenticate("jwt", { session: false }, (error) => {
    if (error) {
      res.json({
        code: 500,
        success: false,
        message: "Internal Server Error"
      });
    }
    next();
  })(req, res, next);
});

apolloServer.applyMiddleware({ app });

module.exports = app;
