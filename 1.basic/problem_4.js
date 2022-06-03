// Write a function that takes a string (a) and a number (n) as argument
// Return the nth character of 'a'

//myFunction('abcd',1) ,Expected 'a'
//myFunction('zyxbwpl',5) ,Expected 'w'
// myFunction('gfedcba',3) , Expected 'e'

function myFunction(a, n) {
  result = a[n - 1];
  console.log(result);
}

myFunction("abcd", 1);
myFunction("zyxbwpl", 5);
myFunction("gfedcba", 3);
