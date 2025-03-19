// Read user input for conversion type and value
let conversionType = process.argv[2];  // Type of conversion (e.g., "feetToInch")
let value = parseFloat(process.argv[3]); // Value to convert

if (isNaN(value)) {
    console.log("Please enter a valid number for conversion.");
} else {
    switch (conversionType) {
        case "feetToInch":
            console.log(`${value} Feet = ${value * 12} Inches`);
            break;
        case "inchToFeet":
            console.log(`${value} Inches = ${(value / 12).toFixed(2)} Feet`);
            break;
        case "feetToMeter":
            console.log(`${value} Feet = ${(value * 0.3048).toFixed(2)} Meters`);
            break;
        case "meterToFeet":
            console.log(`${value} Meters = ${(value * 3.28084).toFixed(2)} Feet`);
            break;
        default:
            console.log("Invalid conversion type! Use: feetToInch, inchToFeet, feetToMeter, meterToFeet.");
    }
}