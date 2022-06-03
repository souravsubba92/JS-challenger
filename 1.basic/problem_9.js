// Iterative method
/*function myFunction(a, b) {
  let count = 0;
  for (let i = 0; i < b.length; i++) {
    if (b.charAt(i) == a) {
      count += 1;
    }
  }
  return count;
}*/

function myFunction(a, b) {
  return b.split("").filter((b) => b === a).length;
}

console.log(
  myFunction("m", "how many times does the character occur in this sentence?")
);
