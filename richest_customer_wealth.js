//  You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.
// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

// Example 1:
// Input: accounts = [[1,2,3],[3,2,1]]
// Output: 6
// Explanation:
// 1st customer has wealth = 1 + 2 + 3 = 6
// 2nd customer has wealth = 3 + 2 + 1 = 6
// Both customers are considered the richest with a wealth of 6 each, so return 6.

// Example 2:
// Input: accounts = [[1,5],[7,3],[3,5]]
// Output: 10
// Explanation:
// 1st customer has wealth = 6
// 2nd customer has wealth = 10
// 3rd customer has wealth = 8
// The 2nd customer is the richest with a wealth of 10.

// Example 3:
// Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]
// Output: 17

//declaring a function called maximumWealth that accepts an arguement called accounts
var maximumWealth = function (accounts) {
  // creates an empty array to hold our totals.
  maxWealth = [];
  //for each customer in accounts, we want to declare a variable num and set it to 0.
  for (i = 0; i < accounts.length; i++) {
    num = 0;
    //for each account that a given customer has, we want to add the value to num, so that we can learn the total value of all of this customer's accounts
    for (j = 0; j < accounts[i].length; j++) {
      num += accounts[i][j];
    }
    //once all the accounts for a given customer have been added together, we add the total to the maxWealth array.
    maxWealth.push(num);
  }
  // This will print the maxWealth array. This is only for debugging purposes, and can be commented out if desired
  console.log(maxWealth);
  // declares a variable called bigBank, and is assigned the largest value in the maxWealth array.
  var bigBank = Math.max(...maxWealth);
  //This is a more reader friendly answer. It can be commented out if desired
  console.log("Largest Wealth: " + bigBank);
  return bigBank;
};

// Test Cases:
maximumWealth([[1,2,3],[3,2,1]])
maximumWealth([[1,5],[7,3],[3,5]])
maximumWealth([[2,8,7],[7,1,3],[1,9,5]])