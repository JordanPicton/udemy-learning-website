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

// console.log("Hello.");
console.log(playerOne[0]); // Gives undefined as output.
console.log(playerOne["lootedItems"]);
console.log("Object Player Two Blocks Mined: " + playerTwo.blocksMined);
// console.log(playerTwo."itemsCrafted"); // This breaks the entire script which is funny.

// Understanding the different between the two options.
const objectTest = {
    
}