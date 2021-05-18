// Printing true if day of month is between March 20 and June 20, false otherwise
{
    const prompt = require('prompt-sync')();
    const day = prompt('Enter day: ');
    const month = prompt('Enter month: ');
    if(month == "March" || month == "April" || month == "May") {
        if(day >= 20 && day <= 31 && month == "March")
            console.log("True");
        if(day >= 1 && day <= 30 && month == "April") 
            console.log("True");
        if(day >= 1 && day <= 31 && month == "May")
             console.log("True");
        if(day >= 1 && day <= 20 && month == "June")
            console.log("True");
    }
    else 
        console.log("False");
}