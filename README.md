# Reading_list

 Hello, and welcome to my code. Whomever has the task of reviewing my code, thank you in advance for your helpful feedback. This experience was quiet a journey for me as I got to dip my toe into some new practices and learn a lot in the process. Testing is a new pratice for me but one I want to continue to grow in. Btw, that shirt looks great on you, is it new? Okay here we go!!!!

### How do I use it

You can easily clone this from the repo and test it in your favorite text editor by typing `git clone` and pasting the repo into your terminal.

Once you have the repo cloned type in your terminal `npm install` Once that is installed right click the file `BookSearch.js ` and open it in theterminal then type 
`node BookSearch` and then type in a desired book title, topic or genre.
### Ex:
```
node BookSearch.js Rabbit Care
node BookSearch.js Moby Dick
node BookSearch.js Romantic Slasher 
```
A table will then display five books including the following api informaion

* Title
* Author
* Publisher

After that the user is asked to choose a book from the readling list.

If none of the books tickle their fancy they can press Ctrl C to start over.

If they do find one they just select from the array given to them and then it is saved inside their reading list.

### What if I want to be a troll and break the code?
 Glad you asked! I created a new function called containsSpecialCharacters which uses regex or Regular Expression to assist in weeding out unwanted characters in the string search. As far as my research goes no book starts with *!%{#@ so, I added in a special characters array that, if entered would return a helpful error message asking the user to please enter in a genre, title, or topic of a book instead. This message will also will appear if nothing is typed. I did not include numbers becasue apon testing many books came up with in the search with numerical names and I did not want to make my search requirements too strict right now. 

### Running the tests
My tests are passing Wooohooo! I realized that my original attempt was geared more toward React components and I did not need to make so many seperate files.
### To run the tests go to the terminal and type 
`npm run test`


### Who is this app for?

This app was created for the busy coder who loves to read. Now they can simply search for a book within the comfort of their own terminal. 

### What was my process for doing the things I did?

* I chose javascript becasue it is the language I feel most comfortble in right now. 

* I decided to create a table for the data to be displayed on to give the user a better UI experience.

* The reading list is displayed not just inside the terminal but in a seperate json folder as an added precaution.

* I orignally adding a .env file, only to realize after looking again at the documentation and the instructions of the code challenge that it would be okay to use the public api and not need to hide a key. 

* I added inquirer as a way to add to the UX as it just seems nicer to be kindly prompted within the app as appose to go to the readme file to figure out how to do everything

* I spent some extra time reading documentation and trying to apply tests since I want to apply best practices to my code. I was able to write working tests when I broke the code into smaller functions but, then I was faced with the dilema of my readinglist not saving properly. In the end I chose to go back to my async code to present a working prduct and hope that next round I can do figure out the solution that was holding me back this round.

### What is next

* Add an additional prompt telling the user to type in a keyword for their book search

* Create edge cases to test this new prompt

### Nice to haves

* An ability to choose none of the books from the given list or to exit out without typing ctrl C

* To toggle within the book list and make a selection within the table instead of in a seperate array

* One of those love sac things, have you ever sat in one? they are super comfortable.


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

* npm packages

* Github

* My human and non human support system.

### Thank you to whomever is reading this ReadMe file. I figured I would try and add a bit of fun as you probably have to read a lot of these over the next few weeks. 
### Looking forward to your feedback

### -Sara :)




