// An example of the combined index, grabber?
let familyPets = ["Charlie", "Suzie", "Dexter"];
console.log(familyPets[0][0]); //Should give the output of "C" and it does. :)

// Modifying an Array.
let countries = ["United Kingdom", "United States of America", "Czechia", "France", "Poland", "Japan", "China"];
console.log(countries);

countries[5] = "China";
countries[6] = "Japan";

console.log(countries);

// Adding data to an index that is very far from other data within the array, meaning something like "Charlie", "Suzie", "Dexter", "undefined", "undefined", "NewDog"
let dogs = ["Charlie", "Suzie", "Dexter"];
dogs[10] = "Marley";

console.log(dogs);

// Adding data to the end of the array.
let cats = ["Tom", "Patchy", "Marlo"];
console.log(cats);

cats.length;
cats[3] = "Luna";
console.log(cats);