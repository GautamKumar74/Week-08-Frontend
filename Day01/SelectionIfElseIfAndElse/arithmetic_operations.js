// Read three numbers from command-line arguments
let a = parseFloat(process.argv[2]);
let b = parseFloat(process.argv[3]);
let c = parseFloat(process.argv[4]);

if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log("Please enter three valid numbers.");
} else {
    let results = {
        "a + b * c": a + b * c,
        "a % b + c": a % b + c,
        "c + a / b": c + a / b,
        "a * b + c": a * b + c
    };

    let values = Object.values(results);
    let minValue = Math.min(...values);
    let maxValue = Math.max(...values);

    console.log("Results:", results);
    console.log("Maximum Value:", maxValue);
    console.log("Minimum Value:", minValue);
}