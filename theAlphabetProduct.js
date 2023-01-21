// Instructions
// have four positive integers, A, B, C and D, where A < B < C < D. The input is a list of the integers A, B, C, D, AxB, BxC, CxD, DxA in some order. Your task is to return the value of D.

//declare a function that accepts an array of numbers
function alphabet(ns) {
    //We should first arrange the list from least to greatest
    ns = ns.sort(function (a, b) {  return a - b;  })
    //This is a number that we can add to as needed, this will help us know how many spaces we must shift from the default position of 3.
    var addNum = 0
    //if the product of A * B is equal to either the 3rd or fourth spot, add 1 addNum
    if (ns[0] * ns[1] == ns[2] || ns[0] * ns[1] == ns[3]) {
      addNum++
    }
    // Similar to above if statement
    if (ns[1] * ns[2] == ns[3] || ns[1] * ns[3] == ns[4]) {
      addNum ++
      console.log(addNum)
    }
    //returns the appropriate slot for number D;
    return ns[3 + addNum]
  }