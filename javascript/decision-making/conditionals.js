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
  console.log("This is not a day within our Earth calendar. You can either have; Monday, Tuesday, Wednesday, Thursday, Friday, Saturday or Sunday.");
}

// 0-3 Free
// 4-12 Child Price
// 13-17 Adolescent Price
// 18-30 Young Adult Price
// 31-60 Adult Price
// 61-80 Pensioners Price
// 81-100 Senior Price
// 120+ Free
// Below is just another example of the ELSE IF statement. I was having trouble trying to figure out what I could do for the conditions after the first one and thought it was something
// magical like between X and Y, but it's a lot easier than that. Basically if the first condition (being the lower one) is false, then that's when the next condition will be run. So going back
// to what I was learning early on with this, the code below the original if only runs if the IF is false, and the same goes for the second statement and so on so forth.
const age = prompt("Please enter your age down below:");
// If not less than 3
if (age <= 3) {
  console.log("You go in for free!");
  // Then are you less than 12? (Only tested if the above condition is false.)
} else if (age <= 12) {
  console.log("Price is £3 to enter.");
  // Then are you less than 17? (Only tested if the above condition is false.)
} else if (age <= 17) {
  console.log("Price is £5 to enter.");
  // Then are you less than 30? (Only tested if the above condition is false.)
} else if (age <= 30) {
  console.log("Price is £10 to enter.");
  // Then are you less than 60? (Only tested if the above condition is false.)
} else if (age <= 60) {
  console.log("Price is £15 to enter.");
  // Then are you less than 80? (Only tested if the above condition is false.)
} else if (age <= 80) {
  console.log("Price is £10 to enter.");
  // Then are you less than 100? (Only tested if the above condition is false.)
} else if (age <= 100) {
  console.log("Price is £3 to enter.");
  // Then are you less than 120? (Only tested if the above condition is false.)
} else if (age <= 120) {
  console.log("You go in for free!");
  // Everything else goes here. (Only tested if the above condition is false.)
} else {
  alert("Make sure you use full numbers between 1-120 for your age!");
}

// Taking the 7 week day example from above and pasting it below like so.
// I've changed the below example to have multiple conditions with the same code response but there's a better way in doing this and I will be showing that method after this example.
// As you can see though there are a few ELSE IF conditions that will print "Meh" into the console if one of them is true.
// Okay so instead of the very bottom condition which is the ELSE statement, I could remove all the ELSE IFs that are giving the same output (Monday, Wednesday, Thursday) and put them under the ELSE statement.
// Which would then allow me to use the ELSE statement to have the console.log ouput of Meh however, this would work for the values of Monday, Wenesday, Thursday but also everything else that is not a day of the week.
let dayOfWeek2 = prompt("What is the day today?", "Monday");
if (dayOfWeek2 === "Monday") {
  console.log("Meh");
} else if (dayOfWeek2 === "Tuesday") {
  console.log("Tuesdays are okay.");
} else if (dayOfWeek2 === "Wednesday") {
  console.log("Meh");
} else if (dayOfWeek2 === "Thursday") {
  console.log("Meh");
} else if (dayOfWeek2 === "Friday") {
  console.log("Friday lets go!");
} else if (dayOfWeek2 === "Saturday") {
  console.log("Saturday!");
} else if (dayOfWeek2 === "Sunday") {
  console.log("Sunday, oh no.");
} else {
  console.log("This is not a day within our Earth calendar. You can either have; Monday, Tuesday, Wednesday, Thursday, Friday, Saturday or Sunday.");
}

// Below is the shorter version of what I was saying above. (Removed all the redundancy and made the ELSE statement catch them instead.)
const dayOfWeek3 = prompt("What is the day today?", "Monday");
if (dayOfWeek3 === "Tuesday") {
  console.log("Tuesdays are okay.");
} else if (dayOfWeek3 === "Friday") {
  console.log("Friday lets go!");
} else if (dayOfWeek3 === "Saturday") {
  console.log("Saturday!");
} else if (dayOfWeek3 === "Sunday") {
  console.log("Sunday, oh no.");
} else {
  console.log("Meh.");
}

// There is another way to write the random number generator code from above. And I'm going to show this off below.
// So the difference with this version is moving the console.log(random2) outside of the if statement so it prints if it is true or not.
// Along with also having the second output if it's greater than or equal to 0.5, moved to an else statement that is linked to the if statement instead of them being separated and in terms
// of words and file size this method would be smaller.
let random2 = Math.random();
if (random2 < 0.5) {
  console.log("The number is less than 0.5!!!");
} else {
  console.log("The number is greater than or equal to 0.5!");
}
console.log(random2);

// Something I want to add to this that I did at college today are the following code blocks. I'll try my best in explaining them.
// Setting a bunch of variables to some Num names that acquire their values from prompts that the user will actually input the values into.
let Num1 = prompt("Enter a number between 0 and 9.");
let Num2 = prompt("Enter a number between 0 and 9.");
let Num3 = prompt("Enter a number between 0 and 9,");

// Then IF Num1 IS greater than Num2 then run the next IF statment.
if (Num1 > Num2) {
  // And if Num1 IS bigger than Num3 then run the console.log.
  if (Num1 > Num3) {
    console.log(`Num1 (${Num1}) is bigger than Num3`);
    // If Num is NOT bigger than Num3 then run console.log.
  } else {
    console.log(`Num3(${Num3}) is bigger than Num1`);
  }
  // If Num1 is NOT bigger than Num 2 then run the next IF statment.
} else {
  // IF Num2 IS bigger than Num3 then run console.log.
  if (Num2 > Num3) {
    console.log(`Num2 (${Num2}) is bigger than Num3.`);
    // IF Num2 is NOT bigger than Num3 then run console.log.
  } else {
    console.log(`Num3 (${Num3}) is bigger than Num2`);
  }
}
