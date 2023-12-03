let games = ["Minecraft", "Terraria", "DayZ", "Call of Duty", "Factorio"];
let animals = ["Dog", "Cat", "Horse", "Pig", "Chicken", "Duck", "Snake"];
let cars = ["Toyota", "Nissan", "Vauxhall", "BMW", "Tesla", "Ford"];

// Concat Method
// The first test is to see if I am correct in how I think concat works with arrays.
let concatArray = games.concat(cars);
console.log(concatArray); // This seems to do what I thought it would do.

// Includes Method (Boolean)
if (games.includes("Minecraft")) {
  console.log("This is true the array games does include Minecraft");
} else {
  console.log("This is false, the array does not include Minecraft");
}

// IndexOf Method
console.log("The index value of Pig within the animals array is " + animals.indexOf("Pig")); // Gives the index value of the full String which is 3 for Pig.
console.log("The index value of Duty within the games array is " + games.indexOf("Duty")); // A little test to see if it can pick up part of the value and still give the output. This does not work as it can't find Duty within the Call of Duty String.

// Reverse Method
console.log(games.reverse()); // Reverses the order of the original array but also changes the original array to this. Meaning the original is lost after this point unless it's saved before hand to a separate variable/array.
//console.log(games); This was to make sure it was actually changing the original array and it does.
