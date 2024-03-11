// First Object Literal Creation, the current player object has 2 key value pairs.
const playerOne = { playerName: "Jordan", lootedItems: 204 };

// Another Object Literal, showing off another version with more types.
const playerTwo = {
  playerName: "Jordan",
  blocksMined: 321321,
  itemsCrafted: 232,
  monstersSlain: 327457547431,
  tags: ["isAdmin", "hasPermission"]
};

// Print both objects in console.
console.log(playerOne); // Prints the playerOne object within console.
console.log(playerTwo); // Prints the playerTwo object within  console.

// Option 1
// Show how NOT to use option/method 1
console.log(playerOne[0]); // Gives undefined as output.

// Show off option 1.
console.log("Player One Looted Items: " + playerOne["lootedItems"]); // First Method of printing key value in console.

// Option 2
// Show off how NOT to use option 2.
// console.log(playerTwo."itemsCrafted"); // This breaks the entire script which is funny.

// Show off option 2.
console.log("Object Player Two Blocks Mined: " + playerTwo.blocksMined); // Second method of printing key value in console.

// Understanding the different between the two options.
// Creating new object but with numbers for the key names.
const objectTest = {
  2: "Good",
  13: "Bad",
  82: "Best"
};

// Showing off that the numbers don't look like Strings for the key names.
console.log(objectTest);

// Showing off that the key names that are numbers are actually Strings.
console.log(objectTest[2]); // This won't work due to it thinking I'm searching for indicies of an array.
console.log(objectTest["2"]); // This is the correct way to do it.