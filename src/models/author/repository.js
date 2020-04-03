// List all authors in the database.
exports.listAuthors = async (context) => {
  return Object.values(context.data.authors);
};

// Get authors by their ids.
exports.getAuthorsByIds = async (context, ids) => {
  return ids.map((id) => context.data.authors[id]);
};
