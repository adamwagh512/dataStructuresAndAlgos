//Instructions
// Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.
// Assume that the input n will always be a positive integer.

// Examples: (Input --> output)

// 2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
// 3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)



//declare a function sumCubes that accepts an arguement of an integer (n)
function sumCubes(n){
    // creates a variable answer to store the running total
      var answer = 0;
    // Creates a for loop that iterates through all integers between 0 and n.
    // i represents the integer we are currently working with  
      for (i = 0; i <= n; i++) {
    // adds the cubed value of i to the current value of answer.
        answer += i ** 3
      };
    //returns the value of answer once the for loop has concluded.
      return answer
    };

// Test Cases
console.log(sumCubes(1)) //Should return 1
console.log(sumCubes(2)) // Should return 9
console.log(sumCubes(3)) // Should return 36
console.log(sumCubes(4)) // Should return 100
console.log(sumCubes(10)) // Should return 3025
console.log(sumCubes(123)) // Should return 58155876