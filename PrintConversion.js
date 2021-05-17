// Converting and printing the respective values
const NUM_OF_FEET_IN_ONE_INCH = 1/12;
console.log("The no. of feet in 42 inches is: " + 42 * NUM_OF_FEET_IN_ONE_INCH);
const NUM_OF_METER_IN_ONE_FEET = 0.3048;
let areaInMeters = 60 * 40 * NUM_OF_METER_IN__ONE_FEET * NUM_OF_METER_IN__ONE_FEET;
console.log("The area of rectangular plot of size 60 feet x 40 feet in sq. meters is: " + areaInMeters);
const NUM_OF_ACRES_IN_ONE_SQRMETER = 0.000247105;
console.log("The area of such 25 rectangular plots in acres is: " + 25 * areaInMeters * NUM_OF_ACRES_IN_ONE_SQRMETER);