
function menu() {
    inquirer
        .prompt([
            {
                name: "id",
                type: "input",
                message: " What is the Product ID?",
                validate: function(value){
                    if(isNaN(value)){
                        return false
                    }else{
                        return true
                    }
                }
            },
            {
                name: "quantity",
                type: "input",
                message: " How many would you like to purchase?",
                validate: function(value){
                    if (isNaN(value)){
                        return false
                        
                    }else{
                        return true
                    }
                }
            },
        ]).then(function (answer) {
            queryURL = "https://www.googleapis.com/books/v1/volumes?q=" + userSearch +"&key=" + process.env.GOOGLE_BOOKS_ID;
            console.log(process.env.GOOGLE_BOOKS_ID, queryURL);}