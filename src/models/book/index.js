const DataLoader = require("dataloader");
const repository = require("./repository");

class Book {
  constructor(context) {
    this.context = context;

    this.bookLoader = new DataLoader((keys) =>
      repository.getBooksByIds(context, keys)
    );
  }

  // List all books.
  async listBooks() {
    if (!this.context.requester.permissions["LIST_BOOKS"]) {
      throw new Error("Unauthorized");
    }

    return repository.listBooks(this.context);
  }

  // Gets books by their ids.
  async getBooksByIds(ids) {
    if (!this.context.requester.permissions["VIEW_BOOKS"]) {
      throw new Error("Unauthorized");
    }

    return ids.map((id) => this.bookLoader.load(id));
  }
}

module.exports = Book;
