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
    selectABookPrompt();
  };
  
  const ApiErrorHandler = ()=> {
    console.log("error, please type in the name, genre or topic of a book");
  };
  
//    const containsSpecialCharacters =(str)=>{
//       ["!@#$%^&*()_+={};':|,.<>"]
//    return (str);
//    }
  
  
//    if (containsSpecialCharacters(userSearchParamaters)===false){
//     callAPI();
//    }else{
//      ApiErrorHandler()
//    }
  
   callAPI();