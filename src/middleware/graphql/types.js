// Define our types.
module.exports = `
  """An author of books."""
  type Author {
    id: ID!
    name: String!
    books: [Book]!
  }

  """A book written by an author."""
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
