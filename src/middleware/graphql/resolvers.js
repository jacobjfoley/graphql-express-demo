// Define resolvers.
module.exports = {
  Query: {
    allAuthors: (parent, args, context) => {
      return context.authorModel.allAuthors();
    },
    authorsByIds: (parent, args, context) => {
      return context.authorModel.getAuthorsByIds(args.ids);
    },
    authorById: async (parent, args, context) => {
      const results = await context.authorModel.getAuthorsByIds([args.id]);
      return results[0];
    },
    allBooks: (parent, args, context) => {
      return context.bookModel.allBooks();
    },
    booksByIds: (parent, args, context) => {
      return context.bookModel.getBooksByIds(args.ids);
    },
    bookById: async (parent, args, context) => {
      const results = await context.bookModel.getBooksByIds([args.id]);
      return results[0];
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
