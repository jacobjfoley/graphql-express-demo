const sandbox = require("sinon").createSandbox();
const expect = require("chai").expect;
const Author = require("./index.js");
const repository = require("./repository");

const authorisedContext = {
  requester: {
    permissions: {
      LIST_AUTHORS: true,
      VIEW_AUTHORS: true,
    },
  },
};

const unauthorisedContext = {
  requester: {
    permissions: {
      LIST_AUTHORS: false,
      VIEW_AUTHORS: false,
    },
  },
};

describe("models/author", () => {
  beforeEach(() => {
    sandbox.stub(repository);

    // Same interface as getAuthorsByIds, expected by dataloader.
    repository.getAuthorsByIds.callsFake(async (context, ids) => {
      return Promise.resolve(ids.map(() => {}));
    });
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe("#allAuthors", () => {
    it("returns all authors", async () => {
      const author = new Author(authorisedContext);
      await author.allAuthors();
      expect(repository.listAuthors.callCount).to.equal(1);
    });

    it("throws an error when unauthorised", async () => {
      const author = new Author(unauthorisedContext);

      let exception = false;
      try {
        await author.allAuthors();
      } catch (error) {
        exception = true;
      }

      expect(exception).to.be.true;
      expect(repository.listAuthors.callCount).to.equal(0);
    });
  });

  describe("#getAuthorsByIds", () => {
    it("returns authors by ids", async () => {
      const author = new Author(authorisedContext);
      const promises = await author.getAuthorsByIds([1]);
      await Promise.all(promises);
      expect(repository.getAuthorsByIds.callCount).to.equal(1);
    });

    it("throws an error when unauthorised", async () => {
      const author = new Author(unauthorisedContext);

      let exception = false;
      try {
        const promises = await author.getAuthorsByIds([1]);
        await Promise.all(promises);
      } catch (error) {
        exception = true;
      }

      expect(exception).to.be.true;
      expect(repository.getAuthorsByIds.callCount).to.equal(0);
    });
  });
});
