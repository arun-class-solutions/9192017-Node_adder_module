// const addTwo = (num1, num2) => {
//   return num1 + num2;
// }

let allMethods = {};

allMethods.addTwo = (num1, num2) => {
  return num1 + num2;
}

allMethods.subtractTwo = (num1, num2) => {
  return num1 - num2;
}

// console.log(addTwo(2, 3));

module.exports = allMethods;
