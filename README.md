# Reading_list

Hello again, and welcome back to my code. Thank you again for your helpful feedback the first time and for reviewing my refactored code. Most of the information in the readMe has not changed. However, I have included a few new things to assist in the understanding of the app as well as my latest process. Also, there will be a test at the end. Ready? Let's do this!
(quick note: I included some example images which will show up if you open in preview.)
 
 
 ### How do I use it

You can easily clone this from the repo and test it in your favorite text editor by typing `git clone` and pasting the repo into your terminal.

Once you have the repo cloned type in your terminal `npm install` Once that is installed right click the file `MainApp.js ` and open it in the terminal then type 
`node MainApp.js`  then a desired book title, genre or topic surrounded by quotation marks (this helps creates a more efficient search for the API).
### Ex:
```
node BookSearch.js "Craft Projects"
node BookSearch.js "Calvin and Hobbes"
node BookSearch.js "Humor" 
```
A table will then display five books including the following api informaion

* Title
* Author
* Publisher

 ![CLI Reading list table](./src/readMeImg/readinglist.PNG)

After that the user is asked to choose a book from the readling list.
Ex below:



 ![CLI Reading list selector](./src/readMeImg/readlistSelect.png)

If none of the books tickle their fancy they can press Ctrl C to start over.

If they do find one they just select from the array given to them and then it is saved inside their reading list 

Ex below:


 ![CLI Reading list selector](./src/readMeImg/jsonReadList.png)

 ### Hey! where did the rest of your logic go? did you make a deal with the robot devil?

 Nope, after breaking down the functions and getting some tests to run I decided to try and do some additional cleanup, I was unable to get all the functions seperated into smaller files but, I was able to extract the API call and keep the test working. You will find the remainder of the logic inside the `BookSearch.js` file now living in my `src` file with the rest of the logic.


### This looks pretty good, but what happens if I want to be a troll and break the code?
 Glad you asked! I created a new function using Regex called ApiSearchParamFilter which includes an array of characters such as "{[%$#" that might accidentally get typed by the user or their mischevious cat sitting on the keyboard. If any of the characters inside the list were to be entered a helpful error message like the one featured in the image below will pop up. Originally I had a few issues with this function but after deleting the space option from the special character array and including " " in the reqirements for the user search I got this search param to do what I wanted it to do yaaaay!
 *
 
 ![CLI error message pic example](./src/readMeImg/NewError.PNG)

The error message will also appear if nothing is typed. I did not include numbers because when I ran the app and searched with numbers many books came up and I did not want to make my search requirements too strict right now. 

### Running the tests
My tests are passing Wooohooo! I realized that my original attempt was geared more toward React components and I did not need to make so many separate files.

### To run the tests go to the terminal and type 
`npm test`


### Who is this app for?

This app was created for the busy coder who loves to read. Now they can simply search for a book within the comfort of their own terminal. 

### What was my process for doing the things I did THIS TIME AROUND?
 Coding can be like building a house of cards sometimes, one wrong step and it can feel like it's all falling apart. I decided that regardless of the outcome I would code without fear and not let the idea of failure paralyze me from move beyond an MVP.
 I set my focus first on refactoring what was asked of me and then trying to go beyond that and see what happened. 
In the end, I was happy to have examples of an extra search parameter and got a chance to practice extracting a file from the code and have it pass it's test and run.

* I chose javascript becasue it is the language I feel most comfortble in right now. 

* I decided to create a table for the data to be displayed on to give the user a better UI experience.

* The reading list is displayed not just inside the terminal but in a seperate json folder as an added precaution.

* I orignally adding a .env file, only to realize after looking again at the documentation and the instructions of the code challenge that it would be okay to use the public api and not need to hide a key. 

* I added inquirer as a way to add to the UX as it just seems nicer to be kindly prompted within the app as appose to go to the readme file to figure out how to do everything


### What is next

*If I didnt get time to do it, breaking up the remaiing functions in BookSearch.js and seperating them into different js files that would live inside the SRC file and export them into the MainApp.js file to make the code cleaner and easier to make changes to.

### Nice to haves

* An ability to choose none of the books from the given list or to exit out without typing ctrl C

* To toggle within the book list and make a selection within the table instead of in a seperate array

* Relying on less dependencies in the future.


### A big thank you to the following dependencies:

* [npm console.table](https://www.npmjs.com/package/console.table).For making the data displayed easy to read. 

* [inquirer](https://www.npmjs.com/package/inquirer). For making the UX better by creating prompts to help the user work the app.

* [fs](https://www.npmjs.com/package/file-system). Thanks for keeping track of my files and making it easier to link things.

* [axios](https://www.npmjs.com/package/axios). Thank you so much for transforming my book requests and responses into data , you're the backbone of this app my friend!

* [Jest](https://jestjs.io/). At first I was like "what is the deal with this clown?" {dad joke intended} that being said, I can truly apprechate all that you do for code, and I hope we can keep working together.



### Honorable mentions

* .env - Everyone knows you are important when an API key need to be kept secret, sorry you got cut from the code good buddy.

* hot yoga - namaste sane thanks to you

* all the documentation

* npm packages (quick note, the npm package inquirer, as of now has a small bug in it making "message:" unable to work, so for the time being I have created a console.log to log the message "what book do you want to add to the reading list" I felt that was an important part of the UX and wanted to keep it in.)

* Github

* My human and non human support system.

### Thank you again for reading this ReadMe file. Since I had to make some updates I tried to keep it on the amusing side for you as well. 
### Looking forward to your feedback

### -Sara :)

### Here is the test btw. I hope you were paying attention.

 Which undersea animal can deliver a punch that is equivalent to a 22 caliber bullet? 
 
 * Mermaid Mike Tyson

 * Mantis Shrimp

 * Punchy, the only whale with arms.



