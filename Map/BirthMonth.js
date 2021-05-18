// Finding all the individuals having birthdays in the same month
{
    console.log("Welcome to Born Month Program");
    let monthMap = new Map();
    for (let monthNum = 1; monthNum <= 12; monthNum++) {
        monthMap.set(monthNum, 0);
    }

    for(let numOfPeople = 1; numOfPeople <= 50; numOfPeople++) {
        let monthNum = (Math.floor(Math.random() * 100) % 12) + 1;
        let count = monthMap.get(monthNum);
        monthMap.set(monthNum, ++count);
    }
    for (let monthNum = 1; monthNum <= 12; monthNum++) {
        console.log("No. of people born in month num: "+ monthNum + " is " +monthMap.get(monthNum));
    }
}