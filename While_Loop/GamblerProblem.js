// Getting track of number of times won and number of bets made by gambler
{
    const BET_AMOUNT = 1;
    const WIN = 1;
    let winCount = 0, betCount = 0, balance = 100;
    console.log("Welcome to Gambling Program");
    while(balance < 200 && balance > 0) {
        let gamble = Math.floor(Math.random() * 10) % 2;
        if(gamble == WIN) {
            balance = balance + BET_AMOUNT;
            winCount++;
        }
        else
            balance = balance - BET_AMOUNT;
        betCount++;
    }
    console.log("Total number of bets made: "+ betCount);
    console.log("Total wins by gambler = " + winCount);
    console.log("Final money of gambler= " + balance);
}