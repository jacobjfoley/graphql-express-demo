const { Author, Book } = require("../../models");

// Generate a per-request context.
module.exports = (request, response, next) => {
  const { locals } = response;

  locals.authorModel = new Author(locals);
  locals.bookModel = new Book(locals);

  next();
};
