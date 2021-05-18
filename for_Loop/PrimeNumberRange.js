// Printing prime numbers between a range of given numbers
{
    const prompt = require('prompt-sync')();
    let lowerNumber = Number(prompt('Enter the lower number of range: '));
    let higherNumber = Number(prompt('Enter the higher number of range: '));
    console.log("The prime numbers between " + lowerNumber + " and " + higherNumber + " are: ");
    for(let pos = lowerNumber; pos <= higherNumber; pos++) {
        let flag = 0;
        for (let position = 2; position < pos; position++) {
            if (pos % position == 0) {
                flag = 1;
                break;                
            }
        }
        if (pos > 1 && flag == 0)
                console.log(pos);
    } 
}