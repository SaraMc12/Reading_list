
const userprompt = require('./userprompt');

test(" it should return a list type with a message in it ", () => {
    
    
    expect(userPrompt()).toEqual(([
        {
          type: "list",
          message: "Which book would you like to add to your reading list?",
          choices: consoleTable,
          name: "book"
        }
       
      ])
    
    )

  });


