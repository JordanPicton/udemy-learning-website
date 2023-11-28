// Defining some example arrays to use.
let dogs = ["Winston", "Charlie", "Suzie", "Dexter", "Clyde", "Poppy"];
console.log(dogs);
let cats = ["Luna", "Bella", "Milo", "Willow", "Leo"];
console.log(cats);
let people = ["John", "Paul", "Lisa", "Philip"];
console.log(people);

// Example Shift Method.
dogs.shift(); // Will remove the beginning element from the dogs array. Giving the new output of   Charlie", "Suzie", "Dexter", "Clyde", "Poppy".
console.log(dogs);

// Example Unshift Method.
cats.unshift("Simba"); // Will add new elements at the beginning of the array. The element(s) between the parenthesis are added to the array. New output = "Simba", "Luna", "Bella", "Milo", "Willow", "Leo"
console.log(cats);

// Test to see if I can add more than one element with the Unshift Method.
cats.unshift("Nala", "Ginger"); // This is the test to see if it will add more elements. New output should =  "Nala", "Ginger", "Simba", "Luna", "Bella", "Milo", "Willow", "Leo". THIS IS TRUE!
console.log(cats);

// Test to see if I can remove more than one element with Shift method.
//people.shift(3); // Trying to see if I can get it to remove more than one element at once. (Doesn't seem to work),
//console.log(people);

// Test to see how adding different data types work with the Unshift method.
people.unshift("Klara", 5, cats); // Trying to add String, Number and cats array to the people array.
console.log(people); // This output is interesting but it works.