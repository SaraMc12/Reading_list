const APICall = require("../src/BooksSearch").getAPICall;
const top5Results = require("../src/BooksSearch").top5Results;
const ApiSearchParamFilter = require("../src/BooksSearch").ApiSearchParamFilter;

describe("APICall", () => {
  it("should return the correct URL", () => {
    expect(APICall("cats")).toBe(
      "https://www.googleapis.com/books/v1/volumes?q=cats"
    );
  });
});

describe("top5Results", () => {
  it("should return an index of 5 books", () => {
    const response = [
      {
        volumeInfo: {
          authors: ["Jon Smith"],
          publisher: "Ye Old College press",
          title: "Frogs are great"
        }
      }
    ];
    const expectedConsoleTable = [
      {
        Item: 1,
        Author: ["Jon Smith"],
        Publisher: "Ye Old College press",
        Title: "Frogs are great"
      }
    ];
    expect(top5Results(response)).toStrictEqual(expectedConsoleTable);
  });
});

describe("ApiSearchParamFilter", () => {
  it("should return an error message if characters used from special list are used", () => {
    expect(ApiSearchParamFilter("humor")).toBeFalsy();
    expect(ApiSearchParamFilter("&$")).toBeTruthy();
  });
});
