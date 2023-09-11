//Section 14 Quiz 3:

// Q1.    What is the value of score after the following code runs?
let score = 5;
score + 4;

// A1.    score should have a value of 9. Hoever, this is wrong because whilst 4 is added to score, the variable is never updated.

// Q2.   What is the value of bankBalance after the following code runs?
let bankBalance = 100;
bankBalance /= 2;
bankBalance += 10;

// A2.    I said 50 which is wrong because on the 3rd line the variable gets updated again which would give it the value of 60.

// Q3.   What is the value of age after the following code runs?
const age = 64;
age++;

// A3.    I got the answer correct but not for the reason I was thinking, I said 64 due to age++ printing out the variable value first before doing the increment. However, the reason why
// this was wrong is because it's a const variable and not a let variable meaning it can't be changed either way so if it was ++age, it still won't have changed.
