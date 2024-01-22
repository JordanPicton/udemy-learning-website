// An example of a nested array would look like:
let games = [
  ["Doom Eternal", "Apex Legends", "Titanfall 2", "Destiny 2", "Half-Life 2", "Superhot"],
  ["Minecraft", "Terraria", "Vintage Story"],
  ["Ark Survival Evolved", "Rust", "DayZ", "Subnautic"],
];
console.log(games);

// Another example would be something like:
let notesncrosses = [
  ["O", null, "X"],
  [null, "X", "O"],
  ["X", "O", null],
];
console.log(notesncrosses);

// If I was to try and access the 2nd item within the first nested array it would look like something below.
console.log(games[0][1]); //"Apex Legends" should be the output for this.
