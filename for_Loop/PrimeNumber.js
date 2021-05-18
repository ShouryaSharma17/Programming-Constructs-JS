// Checking whether a number is prime or not
{
    const prompt = require('prompt-sync')();
    let numInput = prompt("Enter a number to check whether it is prime or not: ");
    let num = Number(numInput);
    if(num == 1)
        console.log(num + " is not a prime number");
    else {
        for(let pos = 2; pos <= num; pos++) {
            if(num == pos) {
                console.log(num + " is a prime number");
                break;
            }
            if(num % pos == 0) { 
                console.log(num + " is not a prime number");
                break;
            }
        }
    }              
}
