const { graphql } = require("graphql");
const { makeExecutableSchema } = require("graphql-tools");

// Define our types.
const typeDefs = `
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
`;

// Define resolvers.
const resolvers = {
  Query: {
    allAuthors: (parent, args, context) => {
      return context.authorModel.allAuthors();
    },
    allBooks: (parent, args, context) => {
      return context.bookModel.allBooks();
    },
  },
  Author: {
    books: (parent, args, context) => {
      return context.bookModel.getBooksByIds([parent.books]);
    },
  },
  Book: {
    author: (parent, args, context) => {
      return context.authorModel.getAuthorsByIds([parent.author]);
    },
  },
};

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
