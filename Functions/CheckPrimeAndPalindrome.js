// Checking if a number is prime then show that its palindrome is also prime
{
    console.log("Welcome to Prime Number and Palindrome Program");
    const prompt = require('prompt-sync')();
    let num = Number(prompt("Enter the number: "));
    if(isPrime(num)) {
        console.log(num + " is a prime number");
        let number = checkPalindrome(num);
        console.log("The palindrome of " + num + " is " + number);
        if(isPrime(number))
            console.log(number + " is also a prime number");
        else
            console.log(number + " is not a prime number");
    }
    else
        console.log(num + " is not a prime number");

    function isPrime(num) {
        if(num == 1)
            return false;
        else {
            for(let pos = 2; pos <= num; pos++) {
                if(num == pos)
                    return true;
                if(num % pos == 0)
                    return false;
            }
        }
    }    

    function checkPalindrome(num) { 
        let reverse = 0;
		while(num > 0)  {
			let rem = num % 10;
			reverse = reverse * 10 + rem;
			num =Math.floor(num / 10);
        }
        return reverse;
    }
}