const { graphql, buildSchema } = require("graphql");

// Define a schema.
const schema = buildSchema(`
  type Author {
    id: ID!
    name: String!
    books: [Book]!
  }

  type Book {
    id: ID!
    name: String!
    author: Author!
  }

  type Query {
    allAuthors: [Author]!
  }
`);

// Define resolvers.
const resolvers = {
  allAuthors: (parent, args, context) => {
    return [];
    return args.authorModel.listAuthors();
  },
};

// Export our middleware.
module.exports = async (request, response) => {
  const { locals } = response;
  const { query, variables } = request.body;

  const data = await graphql(schema, query, resolvers, locals, variables);

  response.send(data);
};
