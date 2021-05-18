// Finding the magic number
{
    const prompt = require('prompt-sync')();
    let userNum = Number(prompt('Think of a number n between 1 to 100: '));
    let num = 50;
    let lowerNum = 0;
    let higherNum = 100;
    while(num != userNum) {
        if(num > userNum) {
            higherNum = num;
            num = Math.floor((lowerNum + higherNum) / 2);
        }
        if(num < userNum) {
            lowerNum = num;
            num = Math.floor((lowerNum + higherNum) / 2);
        }
    }
    console.log("The assumed number is: " + num);
}