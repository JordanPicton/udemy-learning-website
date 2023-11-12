// First example of Truthy and Falsy. (Value = Empty String)
const userInput = prompt("Give any input.");

if (userInput) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}

// Second example of Truthy and Falsy. (Value = 0)
if (0) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}

// Third example of Truthy and Falsy. (Value = null)
if (null) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}

// Fourth example of Truthy and Falsy. (Value = NaN)
if (NaN) {
    console.log("Truthy");
  } else {
    console.log("Falsy");
  }

// Fifth example of Truthy and Falsy. (Value = undefined)
if (undefined) {
    console.log("Truthy");
  } else {
    console.log("Falsy");
  }