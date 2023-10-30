// Defining a test variable.
let dogs = 3;

// IF statement. (If the variable dogs has a value of three then print the message to console.) dogs has to be exactly 3 in this case is true because I set it above.
if (dogs === 3) {
  console.log("True I do have 3 dogs!");
}

// Here's an example of an IF statement being false and not having ELSE combined. (This will not print out in console due to it being false and there not being an ELSE.)
if (dogs === 4) {
  console.log("If this prints then something is horribly wrong.");
}

// I can also do math within the conditional which is interesting. See below for how this works..
if (56 + 26 === 82) {
  console.log("Yes, 56 + 26 does indeed give the added value of 82!");
}

// Something to help visualise the whole thing about the code not being run in an IF statement if it's false, but other code around it still working would look like this:
console.log("This is before the IF statement that won't print out the message.");
if (5 + 5 === 11) {
  console.log("If this get's printed out then there's something wrong with my code.");
}
console.log("This is after the IF statement that won't print out the message. But as you can see it still prints out this one and the one before.");
