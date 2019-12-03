// SET UP REQUIRMENTS NEEDED

const fs = require("fs");
const axios = require("axios");
let userSearchParamaters = process.argv.splice(2).join(" ");
let queryURL;
const cTable = require("console.table");
const inquirer = require("inquirer");

// LOAD JSON READING LIST

let rawdata = fs.readFileSync("./src/readingList.json");
let readingList = JSON.parse(rawdata);
let bookChoices;

const selectABookPrompt = consoleTable => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Which book would you like to add to your reading list?",
        choices: [1, 2, 3, 4, 5],
        name: "book"
      }
    ])
    .then(confirmUserChoice);
};

/**
 *
 * @param {*} selectionConfirmation
 */
const confirmUserChoice = selectionConfirmation => {
  if (selectionConfirmation.book) {
    console.log(selectionConfirmation.book);
    const bookSelected = bookChoices[selectionConfirmation.book - 1];

    saveBookToJson(bookSelected);
  }
};

const saveBookToJson = bookSelected => {
  readingList.push(bookSelected);
  console.log(readingList);
  try {
    fs.writeFileSync("./src/readingList.json", JSON.stringify(readingList));
    console.log("\nAwesome choice! " + bookSelected.Title + " has now been added to your reading list\n");
  } catch (err) {
    console.error(err);
  }
};

/**
 *
 * @param {*} userSearchParamaters
 *
 */
const getAPICall = userSearchParamaters => {
  queryURL =
    "https://www.googleapis.com/books/v1/volumes?q=" + userSearchParamaters;
  return queryURL;
};

const callAPI = () => {
  axios
    .get(getAPICall(userSearchParamaters))
    .then(APISuccsessHandler, ApiErrorHandler);
};

const APISuccsessHandler = response => {
  const BookInfoArray = response.data.items;
  const consoleTable = top5Results(BookInfoArray);

  console.table(consoleTable);
  bookChoices = consoleTable;
  selectABookPrompt(consoleTable);
};

const ApiErrorHandler = error => {
  console.log("error, please type in the name, genre or topic of a book");
};

callAPI();

const top5Results = BookInfoArray => {
  const consoleTable = [];
  const InfoArrayLength = BookInfoArray.length;
  let minIndex = 0;
  if (InfoArrayLength < 5) {
    minIndex = InfoArrayLength;
  } else {
    minIndex = 5;
  }
  for (let index = 0; index < minIndex; index++) {
    let bookId = index + 1;
    let bookTitle = BookInfoArray[index].volumeInfo.title;
    let bookAuthor = BookInfoArray[index].volumeInfo.authors;
    let bookPublisher = BookInfoArray[index].volumeInfo.publisher;

    consoleTable.push({
      Item: bookId,
      Title: bookTitle,
      Author: bookAuthor,
      Publisher: bookPublisher
    });
  }

  return consoleTable;
};

// this is for testing
module.exports.getAPICall = getAPICall;
module.exports.top5Results = top5Results;
