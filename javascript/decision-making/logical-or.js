// Quick example of OR in action.
const dog = "Charlie";
const firstName = "Jordan";

let input = prompt("What is the value of Dog OR Firstname?");

if (input === "Charlie" || input === "Jordan") {
  console.log("True");
} else {
  console.log("False");
}

// Using the commented out example below I'll be redoing it with including the OR operator.

// const age = prompt("Please enter your age down below:");
// If not less than 3
// if (age <= 3) {
//   console.log("You go in for free!");
// Then are you less than 12? (Only tested if the above condition is false.)
// } else if (age <= 12) {
//   console.log("Price is £3 to enter.");
// Then are you less than 17? (Only tested if the above condition is false.)
// } else if (age <= 17) {
//   console.log("Price is £5 to enter.");
// Then are you less than 30? (Only tested if the above condition is false.)
// } else if (age <= 30) {
//   console.log("Price is £10 to enter.");
// Then are you less than 60? (Only tested if the above condition is false.)
// } else if (age <= 60) {
//   console.log("Price is £15 to enter.");
// Then are you less than 80? (Only tested if the above condition is false.)
// } else if (age <= 80) {
//   console.log("Price is £10 to enter.");
// Then are you less than 100? (Only tested if the above condition is false.)
// } else if (age <= 100) {
//   console.log("Price is £3 to enter.");
// Then are you less than 120? (Only tested if the above condition is false.)
// } else if (age <= 120) {
//   console.log("You go in for free!");
// Everything else goes here. (Only tested if the above condition is false.)
// } else {
//   alert("Make sure you use full numbers between 1-120 for your age!");
// }

let age = prompt("Insert age.");

// So instead of having another expression later on for being over a certain age, I can just do this within the same expression.
// This cleans up the code somewhat due to it not needing another clause to repeat something that's already being done
// just with a different value.
// It's better to just add that extra condition. So the age 0 AND age 3 is one expression. With the OR age 65 being another.
if ((age >= 0 && age <= 3) || age >= 65) {
  console.log("You go in for free!");
  // I added the age >= 0 && , right after that sentence.
} else if (age >= 0 && age <= 12) {
  console.log("Price is £3 to enter.");
} else {
  alert("Make sure you use full/whole numbers between 1-120 for your age!");
}
