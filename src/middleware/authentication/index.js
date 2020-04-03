const repository = require("./repository");

// Store the requester's identity.
module.exports = async (request, response, next) => {
  const authToken = request.get("Authorization");

  // Store an object that describes the user, their roles and permissions.
  response.locals.requester = await repository.getRequester(
    response.locals.db,
    authToken
  );

  next();
};
