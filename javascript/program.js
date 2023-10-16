/** program.js file
Export the function called Program which will pass over the variables: department and degree.
Inside the function return the formatted string that will use the variables department and degree. Use backticks to setup the following sentence:
I am studying the _digital design and development diploma_ in the _business and media_ department.
Write a multi line comment. Make sure this multiline comment has good descriptions of the @param and @return. Also add a @desc to describe what this function is doing overall.
*/

/**
 * @desc a function that will format a sentence based on the department and degree
 * @param {*} department the name of the department
 * @param {*} degree the name of the degree
 * @returns a sentence describing what their degree and department
 */

export function Program (department, degree) {
    return `I am studying the ${degree} in the ${department} department.`;
}