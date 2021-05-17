// Printing the sum of two dice numbers
let diceNumber1 = Math.floor(Math.random() * 10) % 6 + 1;
let diceNumber2 =Math.floor(Math.random() * 10) % 6 + 1;
let sum = diceNumber1 + diceNumber2;
console.log("The 1st dice number after rolling is: " + diceNumber1);
console.log("The 2nd dice number after rolling is: " + diceNumber2);
console.log("The sum of both dice numbers is: " + sum);