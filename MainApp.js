const callAPI = require("./src/BooksSearch").callAPI;
const ApiErrorHandler = require("./src/BooksSearch").ApiErrorHandler;
const containsSpecialCharacters = require("./src/BooksSearch")
  .containsSpecialCharacters;

let userSearchParamaters = process.argv.splice(2).join(" ");

if (containsSpecialCharacters(userSearchParamaters) === false) {
  callAPI(userSearchParamaters);
} else {
  ApiErrorHandler();
}
