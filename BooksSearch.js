
// test to make sure command line is working
console.log('howdy!');
const fs = require('fs');
const axios = require("axios");
// console.log("--\n", process.argv,"\n--");
// creates search paramaters for user to search for a book and have it return as a string of text
let userSearch = process.argv.splice(2).join(" ");
// this is the query string for the api
let queryURL;
// this creats a more readable and organized way form of information by putting the data into tables inside the console
const cTable = require('console.table');
// this is what allows me to create questions to prompt the user in the terminal like asking them to search for something.
const inquirer = require("inquirer");

// LOAD JSON READING LIST

let rawdata = fs.readFileSync('./src/readingList.json');
let readingList = JSON.parse(rawdata);
console.log(readingList);
  
// // Inquierer will prompt the user so they know what to do and such
// WILL GET BACK TO THIS LATER
// // inquirer.prompt([
//    inquirer.prompt([
// // Here we create a basic text prompt.
//     {
//       type: "input",
//       message: "Hi! welcome, please type in a name or genre of a book you would like to search for",
//       name: "bookname",
//       validate: function(value){
//         if(isNaN(value)){
//             return false
//         }else{
//             return true
//         }
//     }
// }
// ]).then(searchABook () {      
//    
//   .then(function(inquirerResponse) {
//     // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
//     if (inquirerResponse.confirm) {
//       console.log("\nAwesome choice!" + inquirerResponse.username);
//       console.log("has now been added to your reading list\n");
//     }
//     else {
  //     console.log("\nThat's okay " + inquirerResponse.username + ", come again when you are more sure.\n");
  //   }
  // });
function selectBook(consoleTable){
  inquirer.prompt([  
  
    {
             type: "list",
            message: "Which book would you like to add to your reading list?",
             choices: [1, 2, 3, 4 ,5],
             name: "book"
           }
           // Here we ask the user to confirm.
          
  ])
  .then(function(inquirerResponse) {
        
       if (inquirerResponse.book) {
           console.log("\nAwesome choice!" + inquirerResponse.book);
           console.log("has now been added to your reading list\n");
          //  add book selected to reading list
          let bookSelected = consoleTable[inquirerResponse.book]
          readingList.push(bookSelected)
          console.log(readingList)

          try {
            fs.writeFileSync("./src/readingList.json", JSON.stringify(readingList))
          } catch (err) {
            console.error(err)
          }
          



          //  save to readingList.json

        //  }
        //  else {
        //    console.log("\nThat's okay " + inquirerResponse.username + ", come again when you are more sure.\n");
        }
       });
    
  
}




function userPrompt(consoleTable){
  inquirer.prompt([  
  
    {
             type: "list",
            message: "Which book would you like to add to your reading list?",
             choices: consoleTable, 
             name: "book"
           }
           // Here we ask the user to confirm.
          
  ])
  .then(function(inquirerResponse) {
        
       if (inquirerResponse.book) {
           console.log("\nAwesome choice!" + inquirerResponse.book);
           console.log("has now been added to your reading list\n");
          //  add book selected to reading list


          //  save to readingList.json
        //  }
        //  else {
        //    console.log("\nThat's okay " + inquirerResponse.username + ", come again when you are more sure.\n");
        }
       });
    
  
}

 searchABook()

// create a function that sends out a get request to google API and brings back desired response


// THIS IS THE ORIGINAL
function searchABook(){
 
  //  call on google api to display search resutls (node BookSearch.js moby dick to test)
    queryURL = "https://www.googleapis.com/books/v1/volumes?q=" + userSearch;
 
}

axios.get(queryURL).then(function (response) {

  const BookInfoArray=response.data.items;
 // create a string that allows the first 5 books from api to be called  and set paramaters of what information is brought back.
 const consoleTable=[];
  for (let index = 0; index < 5; index++) {
    let bookId = index+1;
    let bookTitle = BookInfoArray[index].volumeInfo.title;
    let bookAuthor = BookInfoArray[index].volumeInfo.authors;
    let bookPublisher = BookInfoArray[index].volumeInfo.publisher;

// consoleTable is created to push each api element into the table created in the console
   consoleTable.push({
     Item: bookId,
      Title: bookTitle,
      Author: bookAuthor,
      Publisher: bookPublisher
    });
   
  }
  console.table(consoleTable);
  selectBook(consoleTable)
//  NICE TO HAVE FOR LATER 
  // userPrompt(consoleTable.map(function(item) { return item.Item + ' ' + item.Title;}))
   //console.log(JSON.stringify(response.data, null, 2))
    // if (err) {
    //   return console.log('Error occurred: ' + err);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
 
// add a .then prompt to make this part of the inquirer code happen after api call


