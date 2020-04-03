const { Author, Book } = require("../models");

// Export middleware.
module.exports = (request, response, next) => {
  const { locals } = response;

  locals.authorModel = new Author(locals);
  locals.bookModel = new Book(locals);

  next();
};
