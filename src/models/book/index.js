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
    return repository.listBooks(this.context);
  }

  // Gets books by their ids.
  async getBooksByIds(ids) {
    return this.bookLoader(ids);
  }
}

module.exports = Book;
