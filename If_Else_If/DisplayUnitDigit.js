// Reading a number from cmd line and displaying its unit, tens, hundreds,…
{
    const prompt = require('prompt-sync')();
    let num = Number(prompt('Enter a number: '));
    console.log("Its unit, tens, hundreds,... digit is");
    while(num > 0) {
        let rem = num % 10;
        console.log(rem);
        num = num / 10;
        num = Math.floor(num);
    }
}
