// Define resolvers.
module.exports = {
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
      return context.bookModel.getBooksByIds(parent.books);
    },
  },
  Book: {
    author: async (parent, args, context) => {
      const authorData = await context.authorModel.getAuthorsByIds([
        parent.author,
      ]);
      return authorData[0];
    },
  },
};
