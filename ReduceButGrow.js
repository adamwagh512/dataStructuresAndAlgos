// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

//My Solution 
function grow(x){
    let answer = x.reduce(function (previousValue, currentValue) {
        return previousValue * currentValue;
      });
      return answer
     }


// Test Cases
console.log(grow([1, 2, 3])) // Expected value 6
console.log(grow([4, 1, 1, 1, 4])) // Expected value 16
console.log(grow([2, 2, 2, 2, 2, 2])) // Expected value 64