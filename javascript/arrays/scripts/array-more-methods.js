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
