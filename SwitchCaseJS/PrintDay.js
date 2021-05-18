
// Reading a day number from cmd line and printing its day name accordingly
{
    const prompt = require('prompt-sync')();
    const dayNum = prompt('Enter day number between 1 to 7: ');
    switch(dayNum) {
        case "1" :
            console.log("Monday");
            break;
        case "2" :
            console.log("Tuesday");
            break;
        case "3" :
            console.log("Wednesday");
            break;
        case "4" :
            console.log("Thursday");
            break;
        case "5" :
            console.log("Friday");
            break;
        case "6" :
            console.log("Saturday");
            break;
        case "7" :
            console.log("Sunday");
            break;
        default:
            console.log("Invalid day");
    } 
}