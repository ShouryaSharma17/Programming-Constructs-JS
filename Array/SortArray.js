// Finding the 2nd largest and the 2nd smallest element after sorting the array.
{
    console.log("Welcome to Finding Max and Min Number in Array");
    let numArray = new Array();
    for(let pos = 0; pos < 10; pos++) {
        let threeDigitNumber = Math.floor(100 + Math.random() * 900)
        numArray.push(threeDigitNumber);
    }
    console.log("The array of 3 digit random numbers are:");
    console.log(numArray);
    numArray.sort();
    console.log("The sorted array is:");
    console.log(numArray);
    console.log("The 2nd smallest number is " + numArray[1]);
    console.log("The 2nd largest number is " + numArray[numArray.length - 2]);
}