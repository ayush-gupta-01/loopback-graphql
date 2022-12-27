const express = require("express");
const app = require("../server");
var { graphqlHTTP } = require("express-graphql");
var { buildSchema } = require("graphql");
const schema = require("../../common/schema");

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
