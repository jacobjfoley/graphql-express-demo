const express = require("express");
const {
  authentication,
  context,
  graphql,
  health,
  mockData,
  logging,
} = require("./middleware");

const PORT = process.env.port || 3000;

// Create new express app.
const app = express();

// Add middleware for all routes.
app.use(express.json());
app.use(logging);
app.use(mockData);
app.use(authentication);
app.use(context);

// Define routed middleware.
app.get("/", health);
app.post("/graphql", graphql);

// Start listening for requests.
app.listen(PORT);
console.log(`Listening on http://localhost:${PORT}`);
