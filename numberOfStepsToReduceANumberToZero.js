//1342. Number of Steps to Reduce a Number to Zero
// Given an integer num, return the number of steps to reduce it to zero.
// In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

// Example 1:
// Input: num = 14
// Output: 6
// Explanation:
// Step 1) 14 is even; divide by 2 and obtain 7.
// Step 2) 7 is odd; subtract 1 and obtain 6.
// Step 3) 6 is even; divide by 2 and obtain 3.
// Step 4) 3 is odd; subtract 1 and obtain 2.
// Step 5) 2 is even; divide by 2 and obtain 1.
// Step 6) 1 is odd; subtract 1 and obtain 0.

// Example 2:
// Input: num = 8
// Output: 4
// Explanation:
// Step 1) 8 is even; divide by 2 and obtain 4.
// Step 2) 4 is even; divide by 2 and obtain 2.
// Step 3) 2 is even; divide by 2 and obtain 1.
// Step 4) 1 is odd; subtract 1 and obtain 0.

// Example 3:
// Input: num = 123
// Output: 12

var numberOfSteps = function (num) {
    //This loop will continue to run until num = 0. We will keep track of how many steps it takes by using the variable i. Each time the loop runs, i will increase by one.
  for (i = 0; num > 0; i++) {
    // if num is even, it will be divided by 2 and the new value will be assigned to the variable num.
    if (num % 2 == 0) {
      num /= 2;
    // if the value of num is above 0 but not evenly divisible by two, 1 will be subtracted from the value of num.
    } else {
      num -= 1;
    }
  }
  // Once the loop is complete, and the num has been reduced to 0, this console.log will let us know how many steps it took
  console.log(i);
};

numberOfSteps(234);
