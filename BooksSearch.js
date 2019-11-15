// test to make sure command line is working
console.log('hey!');

require('dotenv').config()
var keys = require("./src/keys");
var fs = require('fs')
var axios = require("axios");
var userInput = process.argv[2]
console.log("--\n", process.argv,"\n--");
var userSearch = process.argv.splice(3).join(" ");



// create array for local reading list. this will only be available on users local storage
// const readingList =[];
// create array for the 5 search results that will be returned to user with required data information.

// const searchBook =[
//   { id: 1,
//     author: '',
//     title: '',
//     publisher: ''
//   },
//   { id: 2,
//     author: '',
//     title: '',
//     publisher: ''
//   },
//   { id: 3,
//     author: '',
//     title: '',
//     publisher: ''
//   },
//   { id: 4,
//     author: '',
//     title: '',
//     publisher: ''
//   },
//   { id: 5,
//     author: '',
//     title: '',
//     publisher: ''
//   }

// ];

// create function to search for a book using Google Books API
search();

function search(userInput ,searchABook){

}

function searchABook(){
  console.log("search-a-book")
  //  call on google API WHICH IS NOT WORKING!!!! and when it does work display required info below
   var queryURL = "https://www.googleapis.com/books/v1/volumes?q=" + userSearch +"&key=" + process.env.GOOGLE_BOOKS_ID;
   console.log(process.env.GOOGLE_BOOKS_ID);
}

//  function bookRequest() {
//   //  console.log("search-a-book")
//   // //  call on google API WHICH IS NOT WORKING!!!! and when it does work display required info below
  //  var queryURL = "https://www.googleapis.com/books/v1/volumes?q=" + userSearch +"&key=" + process.env.GOOGLE_BOOKS_ID;
  //  console.log(process.env.GOOGLE_BOOKS_ID);
  axios.get(queryURL).then(function (response) {
   console.log(JSON.stringify(response.data, null, 2))
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
// // return only the infomation below in command line in the bookSearchResults array
// // add a then and catch statment
    
//        console.log("Author: ", response.data.Author);
//        console.log("Title: ", response.data.Title);
//        console.log("Publisher : ", response.data.Publisher);
     
//    });
//   }
//   fetchBooks:() => axios.get("https://www.googleapis.com/books/v1/volumes?q=" + userSearch +"&key=" + process.env.GOOGLE_BOOKS_ID)
//   .then(res=>res.data)
//   .catch(err=>'error')

// // use either maxresult or pagenation to only allow 5 results to be returned
//   // maxResults	unsigned integer	


//   // create logic to add books from api to local reading list

//   Addtolist();

//   function Addtolist(){
//     // add books from google api and put them into 
//     // a JSON string
//   }

//   bookRequest();
