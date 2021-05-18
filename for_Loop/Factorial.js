// Calculating factorial of a number
{
    const prompt = require('prompt-sync')();
    let num = Number(prompt('Enter the number for calculating its factorial: '));
    let factorialValue = 1;
    for(let pos = 1; pos <= num; pos++)
         factorialValue *= pos;
    console.log("The factorial of the given number: " + num + " is " + factorialValue);
}