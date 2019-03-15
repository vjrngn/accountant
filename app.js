const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const { ApolloServer, gql } = require("apollo-server-express");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "world",
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

apolloServer.applyMiddleware({ app })

module.exports = app;
