let stringOne = "Hi";
let stringTwo = "Bye";
let referenceMemory = 82; // When assigning this it stores the data in memory.

let arrayOne = ["Hi", "Bye"];
let arrayTwo = [1]

// String === Operator Test
console.log(stringOne === stringOne); // Outputs true because they are exactly the same.
console.log(stringOne === stringTwo); // Outputs false because they are not the same.

// Array === Operator Test
console.log("This is arrayOne output: " + arrayOne === arrayOne); // Outputs false, 
console.log("This is arrayTwo output: " + arrayTwo === arrayTwo); // Outputs false,

// Array == Operator Test
console.log("This is arrayOne output: " + arrayOne == arrayOne); // Outputs false, 
console.log("This is arrayTwo output: " + arrayTwo == arrayTwo); // Outputs false,