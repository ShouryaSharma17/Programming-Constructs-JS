// Finding factors of a number using prime factorisation method and storing them in a array.
{
    console.log("Welcome to Prime Factorisation Program");
    const prompt = require('prompt-sync')();
    let num = Number(prompt('Enter the number for finding its prime factor: '));
    console.log("The prime factors of " + num + " are: ");
    let factorArray = new Array();
    for(let pos = 2; pos < num; pos++) {
        for( ; num % pos == 0 ; num /= pos)
            factorArray.push(pos);
     }
     if(num > 2)
        factorArray.push(num);
    console.log(factorArray);
}