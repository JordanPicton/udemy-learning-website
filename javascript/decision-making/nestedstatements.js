// The example I'm about to paste below is already used and talked about within the conditionals.js file so I'll remove the comments from this one, leave the code but comment the code out.
// The reason to why I've included this to begin with is to just show an example of how nested conditions can work.

// ---------Example Start---------
// let Num1 = prompt("Enter a number between 0 and 9.");
// let Num2 = prompt("Enter a number between 0 and 9.");
// let Num3 = prompt("Enter a number between 0 and 9,");

// if (Num1 > Num2) {
//   if (Num1 > Num3) {
//     console.log(`Num1 (${Num1}) is bigger than Num3`);
//   } else {
//   }
// } else {
//   if (Num2 > Num3) {
//     console.log(`Num2 (${Num2}) is bigger than Num3.`);
//   } else {
//     console.log(`Num3 (${Num3}) is bigger than Num2`);
//   }
// }
// ---------Example End---------

const password = prompt("Please enter a possword.");
// Password must be 6+ characters
if (password.length >= 6) {
  console.log("This password is long enough.");
  // Password cannot include space/white space (This should only really be checked if the password is longer or equal to six characters.)
  if (password.indexOf(" ") === -1) {
    console.log("Password is all good!");
  } else {
    console.log("Spaces are not allowed within the password.");
  }
} else {
  console.log("Password isn't long enough. Needs to be 6+ characters.");
}
// Password cannot include space/white space (I could have this after the first conditional but I'm looking for nested conditionals)
// if (password.indexOf(" ") === -1) {
//   console.log("Password is all good!");
// } else {
//   console.log("Spaces are not allowed within the password.");
// }
