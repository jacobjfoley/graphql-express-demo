const utils = require("../../utils");

// List all books.
exports.listBooks = async (context) => {
  return Object.values(context.data.books).map(utils.dataMapper);
};

// Get books by ids.
exports.getBooksByIds = async (context, ids) => {
  return ids.map((id) => utils.dataMapper(context.data.books[id]));
};
