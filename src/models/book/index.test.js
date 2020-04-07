const sandbox = require("sinon").createSandbox();
const expect = require("chai").expect;
const Book = require("./index.js");
const repository = require("./repository");

const authorisedContext = {
  requester: {
    permissions: {
      LIST_BOOKS: true,
      VIEW_BOOKS: true,
    },
  },
};

const unauthorisedContext = {
  requester: {
    permissions: {
      LIST_BOOKS: false,
      VIEW_BOOKS: false,
    },
  },
};

describe("models/book", () => {
  beforeEach(() => {
    sandbox.stub(repository);

    // Same interface as getBooksByIds, expected by dataloader.
    repository.getBooksByIds.callsFake(async (context, ids) => {
      return Promise.resolve(ids.map(() => {}));
    });
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe("#allBooks", () => {
    it("returns all books", async () => {
      const book = new Book(authorisedContext);
      await book.allBooks();
      expect(repository.listBooks.callCount).to.equal(1);
    });

    it("throws an error when unauthorised", async () => {
      const book = new Book(unauthorisedContext);

      let exception = false;
      try {
        await book.allBooks();
      } catch (error) {
        exception = true;
      }

      expect(exception).to.be.true;
      expect(repository.listBooks.callCount).to.equal(0);
    });
  });

  describe("#getBooksByIds", () => {
    it("returns books by ids", async () => {
      const book = new Book(authorisedContext);
      const promises = await book.getBooksByIds([1]);
      await Promise.all(promises);
      expect(repository.getBooksByIds.callCount).to.equal(1);
    });

    it("throws an error when unauthorised", async () => {
      const book = new Book(unauthorisedContext);

      let exception = false;
      try {
        const promises = await book.getBooksByIds([1]);
        await Promise.all(promises);
      } catch (error) {
        exception = true;
      }

      expect(exception).to.be.true;
      expect(repository.getBooksByIds.callCount).to.equal(0);
    });
  });
});
