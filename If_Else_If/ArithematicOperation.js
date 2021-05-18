// Taking 3 numbers from cmd line and printing the max and min value after doing arithmetic operations
{
    const prompt = require('prompt-sync')();
    let a = Number(prompt('Enter 1st number: '));
    let b = Number(prompt('Enter 2nd number: '));
    let c = Number(prompt('Enter 3rd number: '));
    console.log("The three numbers are: " + a + ", " + b + " and " + c);
    let result1 = a + b * c;
    console.log(result1);
    let result2 = a % b + c;
    console.log(result2);
    let result3 = c + a / b;
    console.log(result3);
    let result4 = a * b + c;
    console.log(result4);
    let min = result1;
    if(result2 < min)
        min = result2;
    if(result3 < min)
        min = result3;
    if(result4 < min)
        min = result4;
    console.log("The minimum value is: " + min);
    let max = result1;
    if(result2 > max)
        max = result2;
    if(result3 > max)
        max = result3;
    if(result4 > max)
        max = result4;
    console.log("The maximum value is: " + max);
}