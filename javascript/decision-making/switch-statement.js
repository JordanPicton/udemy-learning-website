// Just like all other decision making tools, define a variable I want to use as the example(s) first. Then get into building something to test it out on.
const day = 4;

//Below is where the value from the variable day will be tested within the Switch statement. But also shows the syntax and structure of the statement.
// Just quickly before getting into building this, the way I want this to work is if the value of day is 1 then give the output of Monday, 2 -> Tuesday, 3 -> Wednesday, 4 -> Thursday, 5 -> Friday, 6 -> Saturday, 7 -> Sunday.
// I'll first build this with if statements first, and then comment it out and move it underneath the switch statement that will replace it.

switch (day) {
  // The syntax below basically compares the value of variable day to case "1" which is the value it's comparing it to.
  // For example if I was to set the variable day value to "Monday" and with the first week of the day being a Monday, instead of the first case being case 1 (because yes Monday is the first day of the week.)
  // Then it would look something like case "Monday": And instead of the second comparable being case 2: it would be case "Tuesday": and so on so forth.
  case 1:
    console.log("Today Is Monday");
}

// Below is how I would make the example in an IF statement.
// if (day === 1) {
//   console.log("Today Is Monday");
// } else if (day === 2) {
//   console.log("Today Is Tuesday");
// } else if (day === 3) {
//   console.log("Today Is Wednesday");
// } else if (day === 4) {
//   console.log("Today Is Thursday");
// } else if (day === 5) {
//   console.log("Today Is Friday");
// } else if (day === 6) {
//   console.log("Today Is Saturday");
// } else if (day === 7) {
//   console.log("Today Is Sunday");
// } else {
//   console.log("Invalid Day!");
// }
