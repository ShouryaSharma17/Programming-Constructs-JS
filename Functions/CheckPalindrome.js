// Checking whether two numbers are palindrome or not
{
    function isPalindrome(num1, num2) { 
        let reverse = 0;
		while(num1 > 0)  {
			let rem = num1 % 10;
			reverse = reverse * 10 + rem;
			num1 =Math.floor(num1 / 10);
        }
        return reverse == num2;
    }

    console.log("Welcome to Palindrome Program");
    const prompt = require('prompt-sync')();
    let num1 = Number(prompt("Enter 1st number: "));
    let num2 = Number(prompt("Enter 2nd number: "));
    let result = isPalindrome(num1, num2);
    if(result)
		console.log(num1 + " and "+ num2 + " are palindromes");
	else
    console.log(num1 + " and "+ num2 + " are not palindromes");
}