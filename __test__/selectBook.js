// IN THIS TEST i WOUD LIKE TO PASS A NUMBER FROM THE GIVEN 'CHOICES' ARRAY AND VALIDATE THAT THE NUMBER SELECTED COMES BACK AS CHOSEN

selectBook = consoleTable => {
    inquirer.prompt([
        {
          type: "list",
          message: "Which book would you like to add to your reading list?",
          choices: [1, 2, 3, 4, 5],
          name: "book"
        }
        // Here we ask the user to confirm.
      ])
      .then(function(inquirerResponse) {
        if (inquirerResponse.book) {
          console.log("\nAwesome choice!" + inquirerResponse.book);
           console.log("has now been added to your reading list\n");
          // //  add book selected to reading list
          let bookSelected = consoleTable[inquirerResponse.book];
          readingList.push(bookSelected);
          console.log(readingList);
  
          try {
            fs.writeFileSync(
              "./src/readingList.json",
              JSON.stringify(readingList)
            );
          } catch (err) {
            console.error(err);
          }
        }
      });
  };
  