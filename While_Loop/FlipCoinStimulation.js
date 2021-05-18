// Simulating a coin flip and printing heads or tails accordingly 11 times
{
    const HEAD = 0;
    const TAIL = 1;
    let headCount = 0;
    let tailCount = 0;
    let tossCount = 0;
    console.log("Welcome to Flipping Coin Program");
    while(tossCount < 11) {
        let toss = Math.floor(Math.random() * 10) % 2;
        if(toss == HEAD) {  
            console.log("Head")
            headCount++;
        }
        else if (toss == TAIL) {
            console.log("Tail")
            tailCount++;
        }
        tossCount++;
    }
    console.log("Total Head counts: "+ headCount);
    console.log("Total Tail counts: "+ tailCount);
}