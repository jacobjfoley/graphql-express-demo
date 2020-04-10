const expect = require("chai").expect;
const utils = require("./index");

describe("utils", () => {
  describe("#dataMapper", () => {
    it("maps data", () => {
      const rawData = {
        id: 123,
        name: "Alice",
      };

      // Demo data mapper -- we can transform what the database returns
      // however we wish. A simple case could be to use camelcasekeys to
      // convert first_name to firstName to follow object naming style.
      const result = utils.dataMapper(rawData);

      expect(result).to.deep.equal({
        id: 123,
        name: "Alice",
      });
    });
  });
});
