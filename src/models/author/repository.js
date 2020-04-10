const utils = require("../../utils");

// List all authors in the database.
exports.listAuthors = async (context) => {
  const rawData = context.data.authors;
  return Object.values(rawData).map(utils.dataMapper);
};

// Get authors by their ids.
exports.getAuthorsByIds = async (context, ids) => {
  return ids.map((id) => utils.dataMapper(context.data.authors[id]));
};
