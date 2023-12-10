let stringOne = "Hi";
let stringTwo = "Bye";
let referenceMemory = 82; // When assigning this it stores the data in memory.

let arrayOne = ["Hi", "Bye"];
let arrayTwo = [1];

// String === Operator Test
console.log(stringOne === stringOne); // Outputs true because they are exactly the same.
console.log(stringOne === stringTwo); // Outputs false because they are not the same.

// Array === Operator Test
console.log("This is arrayOne output: " + arrayOne === arrayOne); // Outputs false,
console.log("This is arrayTwo output: " + arrayTwo === arrayTwo); // Outputs false,

// Array == Operator Test
console.log("This is arrayOne output: " + arrayOne == arrayOne); // Outputs false,
console.log("This is arrayTwo output: " + arrayTwo == arrayTwo); // Outputs false,

// More tests.
let arrayThree = [1, 2, 3, 4];
let arrayFour = [1, 2, 3, 4];
console.log("The output of arrayThree and arrayFour is: " + arrayThree === arrayFour + ". This is because arrayThree and arrayFour have different memory references.");

// Even More Tests.
let arrayFive = [1, 2, 3];
let arraySix = arrayFive;
let arrayTest = arrayFive === arraySix;
console.log("The output of arrayFive and arraySix is: " + arrayTest + "."); // This is because arraySix is equal to arrayFive in it's entirety. Meaning it's not got the same content the content itself is arrayFive the variable meaning that arraySix's value is literally the same reference as arrayFive.
console.log("The content of arrayFive is currently: " + arrayFive + ".");
console.log("The content of arraySix is currently: " + arraySix + ".");

arrayFive.push(4);
console.log("The content of arrayFive is now: " + arrayFive + ".");
console.log("And the content of arraySix is currently: " + arraySix + ".");
