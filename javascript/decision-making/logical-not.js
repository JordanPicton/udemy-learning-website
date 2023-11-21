// With this example I'll ask a user to enter a name, and then if they don't enter a name then use an if statment to check and if they haven't run it again.
// The way this works is instead of checking the value is something, it's checking if the value is NOT something.
// Using firstName by itself checks to see if it has a falsy or truthy value. Any String would be truthy and everything else would falsy.
let firstName = prompt("Enter your first name!");

if (!firstName) {
  firstName = prompt("Try again!");
}

// Another example of this would be to target people who are NOT getting in for free (using the age ticket example again).
const age = 45;
// First combined expression targets people between 0 and 5 OR greater than 65.
// if ((age >= 0 && age < 5) || age >= 65) {
//   console.log("FREE!");
// }

// Copying that IF statement down here, I can tell it to look for people who are NOT aged between 0 AND 5 OR are 65 and over.
// All I had to do was move one bracket and to add in the NOT symbol. Using NOT in the way I have below negates the entire long expression.
// Having the expression wrapped in that extra set of brackets makes it run that first before negating, but it's also similar to BIDMAS from Math.
if (!(age >= 0 && age < 5 || age >= 65)) {
    console.log("NOT FREE!");
  }