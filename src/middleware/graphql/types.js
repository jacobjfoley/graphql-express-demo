// Define our types.
module.exports = `
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
