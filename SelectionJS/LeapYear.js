// Checking whether the year is leap year or not
{
    const prompt = require('prompt-sync')();
    const year = prompt('Enter year: ');
    if(year %4 == 0) {
        if(year % 100 == 0) {
            if(year % 400 == 0)
                console.log(year + " is a leap year");
            else
                console.log(year + " is not a leap year");
        }
        else 
            console.log(year + " is a leap year");
    }
    else 
        console.log(year + " is not a leap year");
}