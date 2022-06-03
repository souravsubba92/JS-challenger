// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result

/*myFunction('abcdefg') Expected 'defg'
myFunction('1234')Expected '4'
myFunction('fgedcba') Expected 'dcba' */

function myFunction(a) {
  result = a.slice(3);
  console.log(result);
}
myFunction("abcdefg"); //defg
myFunction("1234"); // '4'
myFunction("fgedcba"); // dcba
