console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
// Exercise 1: The Sum of an Array
// The Array Object in JavaScript has a built-in reduce method that iterates over each value in an array and returns a value. It is very useful when calculating sums.
// Write a function that takes an array of numbers as a parameter and returns the sum value of each number in the array. (i.e. write a custom Array.prototype.reduce() function)
// You can use the follow array: const numbers = [2, 22, 12, 17, 18, 39, 129];
// Declare a function arraySum that takes numbers as a parameter
// Declare a variable sum and initialize sum as 0
// Inside the arraySum function body, iterate over each number (value) in the numbers array using the array's forEach method
// The array forEach method takes a callback (function) as a parameter, where you can pass in the value and index of the current array position
// numbers.forEach((number, index) => {...});
// Inside the body of the forEach callback function, write code so that each number in the numbers array is added to the value of sum
// Below the forEach method, then return sum;
// Call the arraySum(numbers) method inside console.log to print out the returned sum.

const numbers = [2, 22, 12, 17, 18, 39, 129];


// function totalArray(arr) {

// }

function arraySum(numbers) {
  let sum = 0;
  numbers.forEach(function (value) {
    sum += value;
    
  });
  return sum;
}

console.log(arraySum(numbers));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");


