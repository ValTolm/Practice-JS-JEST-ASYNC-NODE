const {filterParameters}= require("../asyncFunc");
const {testCases} = require("./DataProvider.js")

console.log(testCases)
describe("Filter function", () => {
    test("it should filter by email and id", () => {
        testCases.map(function (testcase) {
            return expect(filterParameters(testcase.users.input, testcase.filterCond)).toEqual(testcase.users.expected)}) 
    });
  });
