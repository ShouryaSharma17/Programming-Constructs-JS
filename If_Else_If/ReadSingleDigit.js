// Reading a single digit number from cmd line and printing them in the word
{
    const prompt = require('prompt-sync')();
    let num = prompt('Enter a single digit number: ');
    if(num == 0)
        console.log("The number is Zero"); 
    else if(num == 1)
        console.log("The number is One");
    else if(num == 2)
        console.log("The number is Two");
    else if(num == 3)
        console.log("The number is Three");
    else if(num == 4)
        console.log("The number is Four");
    else if(num == 5)
        console.log("The number is Five");
    else if(num == 6)
        console.log("The number is Six");
    else if(num == 7)
        console.log("The number is Seven");
    else if(num == 8)
        console.log("The number is Eight");
    else if(num == 9)
        console.log("The number is Nine");
    else
        console.log("It is invalid number");
}