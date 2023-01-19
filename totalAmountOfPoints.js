// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

// Function named points that accepts the arguement of games.
function points(games) {
  // establishes a variable called seasonScore and sets it to zero
  seasonScore = 0;
  //For each game during the season
  for (i = 0; i < games.length; i++) {
    // for each game during the season, split the entry at the : to obtain the final score. Our team is at index zero
    finalScore = games[i].split(":");
    //if we tied our opponent, we receive 1 point towards our season score
    if (finalScore[0] == finalScore[1]) {
      seasonScore += 1;
    }
    // if we won the game we receive 3 points towards our season score
    else if (finalScore[0] > finalScore[1]) {
      seasonScore += 3;
    }
    // if we lose the game, we receive 0 points towards our season score
    else if (finalScore[0] < finalScore[1]) {
      seasonScore += 0;
    }
  }
  //Once all games have been recorded, return the final season score
  return seasonScore;
}

//Test cases
console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]));

console.log(points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"]));

console.log(points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]));

console.log(points(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]));

console.log(points(["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"]));


