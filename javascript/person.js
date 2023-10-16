/** person.js file
Export the function called Person which will pass over the variables: first, last, and age.
Inside this function return the formatted string that will use the variables throughout the string. Use concatenation with double quotes.
 The sentence should say 
(don’t keep the underscores those are just showing you it is coming from the variables setup.:
My name is _Bob_ _Joe_ and I am _20_ years old.

Write a multi line comment. Make sure this multiline comment 
has good descriptions of the @param and @return. 
Also add a @desc to describe what this function is doing overall.
*/

/**
 * @description a function that will format a sentence with the person's full name and age
 * @param {*} first the first name of the person
 * @param {*} last the last name of the person
 * @param {*} age the age of the person
 * @returns a sentence describing the person
 */

export function Person (first, last, age) {
    return "My name is " + first + " " + last + " and I am " + age + " years old.";
}

