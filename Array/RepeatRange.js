// Findig the digits from range of 1 to 100 that are repeated twice like 33, 77, etc and storing them in an array.
{
    console.log("Welcome to Palindrome Program")
    let numArray = new Array();
    for(let num = 0; num <= 100; num++) {
        if(isPalindrome(num))
            numArray.push(num);
    }
    console.log("The required array is:")
    console.log(numArray);

    function isPalindrome(num) { 
        let temp = num;
        if(num < 10)
            return false;
        let reverse = 0;
		while(num > 0)  {
			let rem = num % 10;
			reverse = reverse * 10 + rem;
			num = Math.floor(num / 10);
        }
        return reverse == temp;
    }
}