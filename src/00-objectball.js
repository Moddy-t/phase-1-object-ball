require("./helpers.js");

describe("Array", () => {
  describe("#indexOf()", () => {
    it("should return -1 when the value is not present", () => {
      const arr = [1, 2, 3];
      if (arr.indexOf(4) !== -1) {
        throw new Error("Test failed");
      }
    });

    it("should return the correct index when the value is present", () => {
      const arr = [1, 2, 3];
      if (arr.indexOf(2) !== 1) {
        throw new Error("Test failed");
      }
    });
  });
});
