// Reading a number from cmd line, converting it according to choice and printing the respective values
{
    const prompt = require('prompt-sync')();
    const numInput = prompt('Enter a number: ');
    var num = Number(numInput);
    console.log("1. Feet to Inch");
    console.log("2. Feet to Meter");
    console.log("3. Inch to Feet");
    console.log("4. Meter to Feet");
    const choiceInput = prompt('Enter a choice between 1 to 4 : ');
    var choice = Number(choiceInput);
    let convertedValue=0;
    switch(choice){
        case 1:
            convertedValue = num * 12;
            console.log("The number of inches in " + num + " feet is: " + convertedValue);
            break;
        case 2:
            convertedValue = num * 0.3048;
            console.log("The number of meters in " + num + " feet is: " + convertedValue);
            break;
        case 3:
            convertedValue = num / 12;
            console.log("The number of feet in " + num + " inches is: " + convertedValue);
            break;
        case 4:
            convertedValue = num / 0.3048;
            console.log("The number of feet in " + num + " meters is: " + convertedValue);
            break;
        default :
            console.log("Invalid choice");
    }
}