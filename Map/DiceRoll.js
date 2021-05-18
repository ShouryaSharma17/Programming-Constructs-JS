// Finding the dice number that reached maximum times and the one that was for minimum times
{
    console.log("Welcome to Dice Roll Program");
    let diceMap = new Map();
    let diceNumForMaxTimes = 0;
    for (let diceNum = 1; diceNum <= 6; diceNum++) {
        diceMap.set(diceNum, 0);
    }

    while(true) {
        let diceNum = (Math.floor(Math.random() * 10) % 6) + 1;
        let count = diceMap.get(diceNum);
        diceMap.set(diceNum, ++count);
        if(count == 10){
            diceNumForMaxTimes = diceNum;
            break;
        }
    }
    let diceArray = new Array();
    for (let diceNum = 1; diceNum <= 6; diceNum++) {
        let diceCount = diceMap.get(diceNum);
        console.log("No. of count for dice number: "+ diceNum + " is " + diceCount);
        if(diceCount == 10)
            continue;
        diceArray.push(diceCount);
    }
    diceArray.sort();
    for (let diceNum = 1; diceNum <= 6; diceNum++) {
        let diceCount = diceMap.get(diceNum);
        if(diceCount == diceArray[0]) {
            console.log("The dice number: "+ diceNum + " is rolled for minimum times i.e. " + diceCount);
            break;
        }   
    }
    console.log("The dice number: "+ diceNumForMaxTimes + " is rolled for maximum times i.e. " + 10);
}