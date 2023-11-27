let favGames = ["Minecraft", "Terraria", "Factorio"];
let favAnime = ["Goblin Slayer", "Fire Force", "Sword Art Online"];

// Push Method Example
favGames.push("Call of Duty"); //favGames will now have the value of "Minecraft", "Terraria", "Factorio", "Call of Duty".
console.log(favGames);

favAnime.push("Naruto");

// Multiple data with Push
favGames.push("DayZ", "Ark Survival");
console.log(favGames); // favGames should now have the array length of 6 and the value of "Minecraft", "Terraria", "Factorio", "Call of Duty", "DayZ", "Ark Survival" //It does.

//Pop Method Example
console.log(favAnime);
favAnime.pop();
console.log(favAnime);

// Barbell Example to show why using them in conjunction can be used.
let barbell = [];
barbell.push(45);
barbell.push(45);
barbell.push(25);
barbell.push(10);
barbell.push(2.5);

console.log(barbell);