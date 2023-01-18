// 412. Fizz Buzz

// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

// Example 1:
// Input: n = 3
// Output: ["1","2","Fizz"]

// Example 2:
// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]

// Example 3:
// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

//declaring the fizzbuzz function which accepts an arguement of n
var fizzBuzz = function (n) {
  // declaring variable bank with an empty array to hold results of the function
  bank = [];
  // for every number between 1 and number n, i will be used to count until number n ...
  for (i = 1; i <= n; i++) {
    // if number i is evenly divisible by 5 and 3, add the word 'FizzBuzz' to the bank array
    if (i % 5 == 0 && i % 3 == 0) {
      bank.push("FizzBuzz");
    }
    //If number i is only equally divisible by 3, add the word 'Fizz' to the bank array.
    else if (i % 3 == 0) {
      bank.push("Fizz");
    }
    // if number i is only equally divisible by 5, add the word 'Buzz' to the bank array.
    else if (i % 5 == 0) {
      bank.push("Buzz");
    }
    // if number i is not evenly divisible by either 3 or 5, convert number i to a string, and add it to the bank array.
    else {
      bank.push(i.toString());
    }
  }
  //Return the completed bank
  return bank;
};

console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
