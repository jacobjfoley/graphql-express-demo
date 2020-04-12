const sinon = require("sinon");
const expect = require("chai").expect;
const resolvers = require("./resolvers");

let context;

describe("middleware/graphql", () => {
  beforeEach(() => {
    const authorModel = {
      allAuthors: sinon.stub(),
      getAuthorsByIds: sinon.stub().returns([{}]),
    };

    const bookModel = {
      allBooks: sinon.stub(),
      getBooksByIds: sinon.stub().returns([{}]),
    };

    context = {
      authorModel,
      bookModel,
    };
  });

  describe("Query/allAuthors", () => {
    it("passes control", () => {
      resolvers.Query.allAuthors(undefined, undefined, context);
      expect(context.authorModel.allAuthors.callCount).to.equal(1);
    });
  });

  describe("Query/authorsByIds", () => {
    it("passes control", () => {
      resolvers.Query.authorsByIds(undefined, { ids: [123] }, context);
      expect(context.authorModel.getAuthorsByIds.callCount).to.equal(1);
    });
  });

  describe("Query/authorById", () => {
    it("passes control", async () => {
      await resolvers.Query.authorById(undefined, { id: 123 }, context);
      expect(context.authorModel.getAuthorsByIds.callCount).to.equal(1);
    });
  });

  describe("Query/allBooks", () => {
    it("passes control", () => {
      resolvers.Query.allBooks(undefined, undefined, context);
      expect(context.bookModel.allBooks.callCount).to.equal(1);
    });
  });

  describe("Query/booksByIds", () => {
    it("passes control", () => {
      resolvers.Query.booksByIds(undefined, { ids: [123] }, context);
      expect(context.bookModel.getBooksByIds.callCount).to.equal(1);
    });
  });

  describe("Query/bookById", () => {
    it("passes control", async () => {
      await resolvers.Query.bookById(undefined, { id: 123 }, context);
      expect(context.bookModel.getBooksByIds.callCount).to.equal(1);
    });
  });

  describe("Author/books", () => {
    it("passes control", () => {
      resolvers.Author.books({ books: [] }, undefined, context);
      expect(context.bookModel.getBooksByIds.callCount).to.equal(1);
    });
  });

  describe("Books/author", () => {
    it("passes control", () => {
      resolvers.Book.author({ author: {} }, undefined, context);
      expect(context.authorModel.getAuthorsByIds.callCount).to.equal(1);
    });
  });
});
