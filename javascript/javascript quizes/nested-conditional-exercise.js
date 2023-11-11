// Change the value of num, so that "YOU GOT ME!" prints out
const num = 0; // THIS IS THE ONLY LINE YOU SHOULD CHANGE :) 

// DO NOT TOUCH ANYTHING BELOW (please) 
if(num <= 100) {
    if(num >= 50) {
        console.log("HEY!");
    }
} else {
    if (num < 103) {
        if(num % 2 === 0){
            console.log("YOU GOT ME!");
        }
    }
}

// Okay so the above function is looking for;
// IF num is LESS than or EQUAL to 100, meaning it is true then move into below. IF num is GREATER than 100 then do nothing and move on.
// IF num is EQUAL to or GREATER than 50 then
// print in console "HEY!"
// For anything ELSE do
// IF num is LESS than 103 then do, meaning it is true then move into below. IF num is GREATER than 100 then do nothing and move on.
// IF num has a REMAINDER value EQUAL to 0 then
// print in console "YOU GOT ME!"

// Meaning the example below would need to be 102 since this is above 100 and below 103, whilst also being the only number that has the remainder of 0 in this range to give the output of "YOU GOT ME!" in console.