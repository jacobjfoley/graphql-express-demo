const { graphql } = require("graphql");
const { makeExecutableSchema } = require("graphql-tools");

const typeDefs = require("./types");
const resolvers = require("./resolvers");

// Combine typedefs and resolvers into a schema.
const schema = makeExecutableSchema({ typeDefs, resolvers });

// Export GraphQL server middleware.
module.exports = async (request, response, next) => {
  const { locals } = response;
  const { query, variables } = request.body;

  try {
    const data = await graphql(schema, query, resolvers, locals, variables);
    response.send(data);
  } catch (error) {
    next(error);
  }
};
