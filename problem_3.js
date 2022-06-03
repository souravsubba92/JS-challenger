function checkType(a) {
  return typeof a;
}

console.log(checkType("name")); //string
console.log(checkType(false)); //boolean
console.log(checkType(5)); //number
console.log(checkType({})); //object
console.log(checkType(null)); //object
console.log(checkType([])); //object
