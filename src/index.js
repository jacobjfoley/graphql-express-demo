const express = require("express");
const graphqlServer = require("./middleware/graphql");
const contextMiddleware = require("./middleware/context");

// Create new express app.
const app = express();

// Add middleware for all routes.
app.use(express.json());
app.use(contextMiddleware);

// Define routes.
app.post("/graphql", graphqlServer);

// Start listening for requests.
app.listen(3000);
