const Author = require("../models/Author");

// Export middleware.
module.exports = (request, response, next) => {
  const { locals } = response;

  // Populate per-request context. Models store a reference to context
  // to allow access to requester, other models, service clients etc.
  locals.authorModel = new Author(locals);

  next();
};
