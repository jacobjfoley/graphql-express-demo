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
    allBooks: [Book]!
  }
`);

// Define resolvers.
const resolvers = {
  allAuthors: (args, context) => {
    return context.authorModel.allAuthors();
  },
  allBooks: (args, context) => {
    return context.bookModel.allBooks();
  },
  books: (args, context) => {
    console.log(args);
    return null;
  },
  author: (args, context) => {
    return null;
  },
};

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
