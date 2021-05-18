// Finding factors of a number using prime factorisation method
{
    const prompt = require('prompt-sync')();
    let num = Number(prompt('Enter the number for finding its prime factor: '));
    console.log("The prime factors of " + num + " are: ");
    for(let pos = 2; pos < num; pos++) {
        for( ; num % pos == 0 ; num /= pos) {
            console.log(pos + " ");
        }
     }
     if(num > 2) {
        console.log(num);
     }
}