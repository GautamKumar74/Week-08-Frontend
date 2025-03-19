// Function to generate a random 3-digit number
function generateRandom3DigitNumber() {
    return Math.floor(100 + Math.random() * 900);
}

// Generate 5 random 3-digit numbers
let numbers = [];
for (let i = 0; i < 5; i++) {
    numbers.push(generateRandom3DigitNumber());
}

// Find the minimum and maximum values
let min = Math.min(...numbers);
let max = Math.max(...numbers);

// Output the results
console.log("Generated numbers: " + numbers.join(", "));
console.log("Minimum value: " + min);
console.log("Maximum value: " + max);