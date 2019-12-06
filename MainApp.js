// CALL API FROM HERE

const callAPI = require("./src/BooksSearch").callAPI;
const ApiErrorHandler = require("./src/BooksSearch").ApiErrorHandler;
const ApiSearchParamFilter = require("./src/BooksSearch").ApiSearchParamFilter;

let userSearchParamaters = process.argv.splice(2).join(" ");

if (ApiSearchParamFilter(userSearchParamaters) === false) {
  callAPI(userSearchParamaters);
} else {
  ApiErrorHandler();
}
