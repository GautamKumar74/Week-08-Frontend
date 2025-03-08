// Function to generate a random 2-digit number (10 to 99)
function getRandomTwoDigitNumber() {
    return Math.floor(Math.random() * 90) + 10;
}

// Generate 5 random two-digit numbers
let numbers = [];
for (let i = 0; i < 5; i++) {
    numbers.push(getRandomTwoDigitNumber());
}

// Calculate sum and average
let sum = numbers.reduce((acc, num) => acc + num, 0);
let average = sum / numbers.length;

// Output results
console.log("Generated Numbers:", numbers);
console.log("Sum:", sum);
console.log("Average:", average.toFixed(2)); // Rounding to 2 decimal places
