// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

// Below Is my solution.
// define a function that takes in 1 arguement, the month in the form of a number between 1-12.
const quarterOf = (month) => {
  // if the number is greater than or equal to 1 and less than 4, return 1 for the first quarter
  if (month >= 1 && month < 4) {
    return 1;
  }
  //if the number is greater than or equal to 4 and less than 7, return 2 for second quarter.
  else if (month >= 4 && month < 7) {
    return 2;
  }
  // if there still isnt a match, and the month is less than 10, return 3  for the third quarter.
  else if (month < 10) {
    return 3;
  }
  // if there still isnt a match and the month is less than or equal to 12, return 4 for the fourth quarter.
  else if (month <= 12) {
    return 4;
  }
  // if there is no match, the user entered something other than a number between 1-12. Lets prompt them to try again.
  else {
    return "invalid input, please select a number between 1 and 12";
  }
};

// Test cases
console.log(quarterOf(12));
console.log(quarterOf(4));
console.log(quarterOf(18));

// I found a much more efficient solution on the codewars solutions forum after I submitted the above solution, but I found that it didn't account for bad user input, so I changed it a bit.

function quarterOfYear(month) {
  //This code ensures that any input is a number between 1-12
  if (month <= 12 && month >= 1) {
    //if the input meets the criteria, the number will be divided by 3 and rounded up to give us which quarter of the year we are in, and assign that value to quarter
    quarter = Math.ceil(month / 3);
    //stops the function and returns the value of quarter
    return quarter;
  }
  //anything other than a number between 1-12 will trigger an invalid input warning.
  else {
    return "invalid input, please select a number between 1 and 12";
  }
}
//Test cases
console.log(quarterOfYear(5));
console.log(quarterOfYear(11));
console.log(quarterOfYear("bob"));
