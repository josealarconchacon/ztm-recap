"strict";

/*
function that calculate the sum of all numbers from 1 up to n
 */
function sumOfNumbers(n) {
  let sum = 0; // Initializes a variable
  for (let i = 1; i <= n; i++) {
    // After the loop completes, sum will hold the sum of integers from 1 to 6: 1 + 2 + 3 + 4 + 5 + 6 = 21
    sum += i;
  }
  return sum;
}
console.log(sumOfNumbers(6));
