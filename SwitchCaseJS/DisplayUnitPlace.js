// Reading a number from cmd line and displaying its unit, tens, hundreds,… digit
{
    const prompt = require('prompt-sync')();
    const numInput = prompt('Enter a number: ');
    var num = Number(numInput);
    const UNIT_DIGIT = 1;
    const TENS_DIGIT = 2;
    const HUNDREDS_DIGIT = 3;
    const THOUSANDS_DIGIT = 4;

    console.log("1. Unit Digit");
    console.log("2. Tens Digit");
    console.log("3. Hundreds Digit");
    console.log("4. Thousands Digit");
    
    const choiceInput = prompt('Enter a choice between 1 to 4 : ');
    var choice = Number(choiceInput);
    switch(choice) {
        case UNIT_DIGIT :
            console.log("Unit digit of number : " + num + " is " + (num % 10));
            break;
        case TENS_DIGIT :
            console.log("Tens digit of number : " + num + " is " + (Math.floor(num / 10) % 10));
            break;
        case HUNDREDS_DIGIT :
            console.log("Hundreds digit of number : " + num + " is " + (Math.floor(num / 100) % 10));
            break;
        case THOUSANDS_DIGIT :
            console.log("Thousands digit of number : " + num + " is " + (Math.floor(num / 1000) % 10));
            break;
        default :
            console.log("Invalid choice");
    } 
}