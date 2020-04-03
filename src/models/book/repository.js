// List all books.
exports.listBooks = async (context) => {
  return Object.values(context.data.books);
};

// Get books by ids.
exports.getBooksByIds = async (context, ids) => {
  return ids.map((id) => context.data.books[id]);
};
