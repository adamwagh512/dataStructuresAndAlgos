// Description
// An infinite number of shelves are arranged one above the other in a staggered fashion.
// The cat can jump either one or three shelves at a time: from shelf i to shelf i+1 or i+3 (the cat cannot climb on the shelf directly above its head), according to the illustration:

//                  ┌────────┐
//                  │-6------│
//                  └────────┘
// ┌────────┐       
// │------5-│        
// └────────┘  ┌─────► OK!
//             │    ┌────────┐
//             │    │-4------│
//             │    └────────┘
// ┌────────┐  │
// │------3-│  │     
// BANG!────┘  ├─────► OK! 
//   ▲  |\_/|  │    ┌────────┐
//   │ ("^-^)  │    │-2------│
//   │ )   (   │    └────────┘
// ┌─┴─┴───┴┬──┘
// │------1-│
// └────────┘
// Input
// Start and finish shelf numbers (always positive integers, finish no smaller than start)

// Task
// Find the minimum number of jumps to go from start to finish

// Example
// Start 1, finish 5, then answer is 2 (1 => 4 => 5 or 1 => 2 => 5)



// This is the solution I came up with to solve the problem
//After solving the problem, I looked on the the solutions board and found a more elegant solution. I have left it commented out below.
function solution(start, finish) {
    //first lets find out how many floors we need to jump
    var floors = finish - start;
    //how many times does three go into floors. Used Math.floor so it would round down to nearest whole number
    var threeJumps = Math.floor(floors / 3)
    //Subtracted the number of times we can jump 3 levels from the total number of levels we need to jump to obtain how many one floor jumps are needed.
    var oneJumps = floors - (threeJumps * 3)
    //added the needed threeJumps and oneJumps together and returned our answer!
    return threeJumps + oneJumps
  }

// function altSolution(start, finish) {
//     var floors = (finish - start)
//     return (Math.floor(floors/3) + (floors % 3))
// }
//Test Case
console.log(Solution(3, 18))