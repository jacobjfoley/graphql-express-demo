const DataLoader = require("dataloader");
const repository = require("./repository");

class Author {
  constructor(context) {
    this.context = context;

    // DataLoaders.
    this.authorLoader = new DataLoader((keys) =>
      repository.getAuthorById(context, keys)
    );
  }

  // Retrieve all authors.
  async allAuthors() {
    if (!this.context.requester.permissions["LIST_AUTHORS"]) {
      throw new Error("Unauthorized");
    }

    return repository.listAuthors(this.context);
  }

  // Retrieve authors by ids.
  async getAuthorsByIds(ids) {
    if (!this.context.requester.permissions["VIEW_AUTHORS"]) {
      throw new Error("Unauthorized");
    }

    return this.authorLoader(ids);
  }
}

module.exports = Author;
