

function selectABook() {
  inquirer.prompt([
      {
        type: "list",
        message: "Which book would you like to add to your reading list?",
        choices: [1, 2, 3, 4, 5],
        name: "book"
      }
      
    ])
  };

  