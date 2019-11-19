// IN THIS TEST I WANT TO SEE IF INQUIRER PROMPTS THE USER

userPrompt = consoleTable => {
    inquirer.prompt([
      {
        type: "list",
        message: "Which book would you like to add to your reading list?",
        choices: consoleTable,
        name: "book"
      }
     
    ]);
  };

  module.exports = userPrompt;