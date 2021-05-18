// Reading a day number from cmd line and printing its day name accordingly
{
    const prompt = require('prompt-sync')();
    let dayNum = prompt('Enter day number between 1 to 7: ');
    if(dayNum == 1)
        console.log("The day is Monday");
    else if(dayNum == 2)
        console.log("The day is Tuesday");
    else if(dayNum == 3)
        console.log("The day is Wednesday");
    else if(dayNum == 4)
        console.log("The day is Thursday");
    else if(dayNum == 5)
        console.log("The day is Friday");
    else if(dayNum == 6)
        console.log("The day is Saturday");
    else if(dayNum == 7)
        console.log("The day is Sunday");
    else
        console.log("It is invalid number"); 
}