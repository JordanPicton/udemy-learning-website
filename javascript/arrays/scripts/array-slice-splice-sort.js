// Initialising some arrays to use for testing.
let cats = ["Bella", "Leo", "Ellie", "Bailey", "Piper", "Penny"];
let dogs = ["Charlie", "Daisy", "Bear", "Buddy", "Cooper", "Max"];
let people = ["Oliver", "Ivy", "Olivia", "Nova", "Luca", "Sophia", "Amelia", "Noah", "Henry"];
let months = ["January", "March", "April", "June"];
let scores = [1, 42, 231, 23124, 7463, 242352, 123412];
let testOne;
let testTwo;
let testThree;

// Slice Method test.
console.log(cats);
console.log(cats.slice(3)); // This will remove the first 3 elements from the array.

testOne = cats.slice(); // This will copy the contents of the array to another variable.
console.log("This is the cats array: " + cats);
console.log("This is the testOne array: " + testOne);

console.log(cats.slice(2, 4)); // This will cut out the elements starting from the first number until the second but will not include the second numbers element.

// Splice Method test
months.splice(1, 0, "February"); // This will start at the index of 1, then it will remove 0 elements starting at index 1, and finally it will insert the value(s) "February" at index 1.
console.log(months); // This should output "January", "February", "March", "April", "June"
months.splice(4, 0, "May"); // Did this one by myself and it works the way I'd expect.
console.log(months); // Gives the output of "January", "February", "March", "April", "May", "June"

testTwo = people.slice(); // Copies the array people over to the variable testTwo for testing.
console.log(testTwo);
testTwo.splice(3, 0, "Maya", "Aria", "Mila", "Ava"); // This doesn't delete any elements it just inserts new ones at index 3.
console.log(testTwo);

// Sort Method test
console.log(scores.sort()); // Doesn't sort the numbers the way you'd expect.