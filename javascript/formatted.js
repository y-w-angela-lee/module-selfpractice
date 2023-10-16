/** formatted.js file
Import the Person function from the person.js file
Import the Program from the program.js file
Initialise the variable data to the imported function of Person that will pass over the values of: John, doe, 20
Initialise the variable studying to the imported function of Program that will pass over the values of: Business & Media, Digital Design and Development Diploma
Initialise the variable sentence to the data and studying variables. This will put the sentences together in one variable.
Console log out the sentence. Check to make sure you can see something in the console log.
To do this make sure you have installed the Live Server plugin in visual studio code.
Then open the index.html file. THEN do ctrl + shift + p and select open with live server from the dropdown.
Then make sure you find the ID content and have it write the sentence that you just created.
*/

import { Program } from "./program.js";

import { Person } from "./person.js";

var data = Person ("John", "Doe", 20);

var studying = Program ("Business & Media", "Digital Design and Development Diploma")

var sentence = data + " " + studying;

console.log(sentence);

document.getElementById("content").innerHTML = sentence;



