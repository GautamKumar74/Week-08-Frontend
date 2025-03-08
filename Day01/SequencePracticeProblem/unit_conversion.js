// a. Convert 42 inches to feet
let inches = 42;
let feet = inches / 12;
console.log(`${inches} inches = ${feet} feet`);

// b. Convert a rectangular plot (60 feet × 40 feet) to meters
let lengthFeet = 60;
let widthFeet = 40;
let feetToMeter = 0.3048; // 1 foot = 0.3048 meters

let lengthMeters = lengthFeet * feetToMeter;
let widthMeters = widthFeet * feetToMeter;
console.log(`Plot size in meters: ${lengthMeters.toFixed(2)}m × ${widthMeters.toFixed(2)}m`);

// c. Calculate area of 25 such plots in acres
let areaOnePlotFeet = lengthFeet * widthFeet; // Area of one plot in square feet
let totalAreaFeet = areaOnePlotFeet * 25; // Total area in square feet

let feetToAcre = 43560; // 1 acre = 43,560 square feet
let totalAreaAcres = totalAreaFeet / feetToAcre;

console.log(`Total area of 25 plots = ${totalAreaAcres.toFixed(2)} acres`);
