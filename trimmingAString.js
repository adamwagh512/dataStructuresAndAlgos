// Instructions: 

// Return a function that will trim a string (the first argument given) if it is longer than the maximum string length (the second argument given). The result should also end with "..."

// These dots at the end also add to the string length.

// So in the above example, trim("Creating kata is fun", 14) should return "Creating ka..."

// If the string is smaller than or equal to 3 characters then the length of the dots is not added to the string length.

// e.g. trim("He", 1) should return "H..."

// If the string is smaller or equal than the maximum string length, then simply return the string with no trimming or dots required.

// e.g. trim("Code Wars is pretty rad", 50) should return "Code Wars is pretty rad"


// Declares a function called trim that takes in a string and desired length
function trim(str, size) {
    //Splits string into Array, so we can take only the characters we want
      var strArray = str.split('')
    // empty array for our for loops
      var trimmedArray = []
    // if the size is greater than the string length, return the string
      if (size >= str.length) {
        return str
      }
    // if the size is less than the string length and the desired size is smaller than 3 characters, add "..." to the end of the string, but they dont count towards string length
      else if (size <= 3) {
        for (i = 0; i < size ; i++) {
          trimmedArray.push(strArray[i])
        }    
        return trimmedArray.join('') + '...'
      }
    // if size is less than string length, but greater than 3: add three dots '...' to the end of the string and they count towards string length
      else {
        for (i = 0; i < size -3; i++){
          trimmedArray.push(strArray[i])
        }
        return trimmedArray.join('') + '...'
    }
};

// Test cases 
console.log(trim("Creating kata is fun", 14)) // Should return "Creating ka..."
console.log(trim("He", 1))// Should return "H..."
console.log(trim("Code Wars is pretty rad", 50))// Should return "Code Wars is pretty rad"