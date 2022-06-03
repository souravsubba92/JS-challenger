// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result
function myFunction(a) {
  result = a.slice(0, 3);
  console.log(result);
}
myFunction("abcdefg"); // 'abc'
myFunction("1234"); //'123'
myFunction("fgedcba"); //'fge'
