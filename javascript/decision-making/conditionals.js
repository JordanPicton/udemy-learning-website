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

// Something else I can do is shown below.
let random = Math.random();
if (random < 0.5) {
  console.log("The number is less than 0.5!!!");
  console.log(random);
}
// What this will do, is firstly set a variable (called random) to the value of Math.random() which will generate a number between 0 and 0.9999999 etc.
// Then the if statement looks for the condition of random being less than 5, if it's true then it will run the code inside the curly braces which will print a String firstly saying "The number is less than 0.5!!!"
// Then the next piece of code just prints out the actual value of what Math.random() gave to the random variable.
// If the condition isn't met/not true then none of the code (being the two console.logs) will not be ran and the code will continue to below if I add more code to this file.

// I could paste the same code I have above with making a few changes to make it work for any number greater than 0.5, more than.
if (random >= 0.5) {
  console.log("The number is greater than 0.5!!!");
  console.log(random);
}
// The reason I've done this is to show that something like this "could" be done this way meaning, one condition met = do something but if not then do nothing, however having another condition you could actually use and do something with.
// However, there is a better way in doing this and I've already messed around with them, IF ELSE statments. IF condition is true do thing one, anything ELSE then do thing two.

// Adding both the less than and greater than pieces of code seem to be working as intended.

// This is me testing the ELSE IF statement process due to me thinking I was working on ELSE statments.
let dayOfWeek = prompt("What is the day today?", "Monday");
if (dayOfWeek === "Monday") {
  console.log("This is the first day of the week!");
} else if (dayOfWeek === "Tuesday") {
  console.log("This is the second day of the week!");
} else if (dayOfWeek === "Wednesday") {
  console.log("This is the third day of the week!");
} else if (dayOfWeek === "Thursday") {
  console.log("This is the fourth day of the week!");
} else if (dayOfWeek === "Friday") {
  console.log("This is the fifth day of the week!");
} else if (dayOfWeek === "Saturday") {
  console.log("This is the sixth day of the week!");
} else if (dayOfWeek === "Sunday") {
  console.log("This is the seventh day of the week!");
} else {
  console.log("This is not a day within our Earth calendar. You can either have; Monday, Tuesday, Wednesday, Thursday, Friday, Saturday or Sunday.")
}
