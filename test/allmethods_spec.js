const allMethods = require("../allMethods");
const expect = require("chai").expect;

describe("All Methods", () => {

  it("Should add two numbers together", (done) => {
    // Expect addTwo to return the sum of two numbers
    expect(allMethods.addTwo(2, 3)).to.equal(5);
    done();
  });

});
