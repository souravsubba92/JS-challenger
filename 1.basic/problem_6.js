// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result
function myFunction(str) {
  result = str.slice(-3);
  console.log(result);
}
myFunction("abcdefg"); //efg
myFunction("1234"); //234
myFunction("fgedcba"); //cba
