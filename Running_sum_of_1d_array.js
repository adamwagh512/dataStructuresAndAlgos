// 1480. Running Sum of 1d Array

// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.

// Example 1:
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

// Example 2:
// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

// Example 3:
// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]

//  Function to calculate a running sum of all numbers in an array, it will take in one variable, an array called nums.
var runningSum = function (nums) {
  // creating a variable called num and setting it to zero
  let num = 0;
  // establishing an empty array called number, that we can push to later
  number = [];
  // Creates a loop that will run for the full length of the nums array
  for (let i = 0; i < nums.length; i++) {
    // adds the current value of num to the value of the nums array at the i position, and pushes it to number array.
    number.push((num += nums[i]));
  }
  // returns the number array once the for loop is complete.
  return number;
};

console.log(runningSum([1, 2, 3, 4]));
console.log(runningSum([1, 1, 1, 1, 1]));
console.log(runningSum([3, 1, 2, 10, 1]));
