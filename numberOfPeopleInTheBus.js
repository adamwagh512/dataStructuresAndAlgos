// Instructions

// There is a bus moving in the city which takes and drops some people at each bus stop.

// You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

// The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.


// My Solution
// Declare a function number that accepts arguement of busStops. Each bus stop is an array of 2 numbers
var number = function(busStops){
// declare a variable riders, to keep track of how many people are on the bus
    var riders = 0;
// This loop will add the number of riders at bus stop index 0 to the bus, and subtract the number at index 1 from the bus.
    for (i = 0; i < busStops.length; i++) {
      riders += busStops[i][0];
      riders -= busStops[i][1];
    };
// Once the loop is complete, return the number of riders still on the bus after the last stop
    return riders
};

// Test Cases
console.log(number([[10,0],[3,5],[5,8]]))// Expected value 5
console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]))// Expected value 17
console.log(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]))// Expected value 21
console.log(number([[0,0]]))// Expected value 0