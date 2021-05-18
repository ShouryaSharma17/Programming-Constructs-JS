// Printing a table of the powers of 2 that are less than or equal to 2^n
{
    const prompt = require('prompt-sync')();
    let numInput = prompt('Enter a number for tabulating power of 2: ');
    let num = Number(numInput);
    console.log("The table of the powers of 2 that are less than or equal to 2^" + num);
    let power = 1;
    for(let pos = 0 ; pos < num ; pos++) {
        power = power * 2;
        console.log(power);
    }
}