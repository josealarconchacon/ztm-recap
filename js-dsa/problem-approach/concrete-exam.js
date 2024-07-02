"strict";

// Write a func that takes an string and return the counts of each chars in the string

// Example: "hello" -> {h:1, e:1, l:2, o:1}
// Example: "hello world" -> {h:1, e:1, l:3, o:2, w:1, r:1, d:1}

function charCount(str) {
  // Check if input is a string
  if (typeof str !== "string") {
    throw new Error("Input should be a string.");
  }

  const count = {};

  // Step 1: Iterate through each character in the string
  for (let char of str) {
    // Step 2: Check if the character exists in the count object
    if (count[char]) {
      // If it exists, increment its count
      count[char]++;
    } else {
      // If it doesn't exist, initialize its count to 1
      count[char] = 1;
    }
  }

  return count;
}

// Example usage:
try {
  console.log(charCount("hello")); // Output: { h: 1, e: 1, l: 2, o: 1 }
  console.log(charCount("hello world")); // Output: { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }

  // Example of invalid input
  // console.log(charCount(123)); // This will throw an error: "Input should be a string."
} catch (error) {
  console.error(error.message);
}
