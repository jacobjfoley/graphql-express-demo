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
    """Get all authors."""
    allAuthors: [Author]!

    """Get a list of authors by their ids."""
    authorsByIds(ids: [ID]!): [Author]!

    """Get a specific author by their id."""
    authorById(id: ID): Author

    """Get all books."""
    allBooks: [Book]!

    """Get a list of books by their ids."""
    booksByIds(ids: [ID]!): [Book]!

    """Get a specific book by their id."""
    bookById(id: ID): Book
  }
`;
