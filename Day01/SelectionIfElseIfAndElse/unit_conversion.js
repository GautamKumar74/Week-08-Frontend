// Read a number from command-line argument
let number = parseInt(process.argv[2]);

let units = {
    1: "Unit",
    10: "Ten",
    100: "Hundred",
    1000: "Thousand",
    10000: "Ten Thousand",
    100000: "Lakh"
};

console.log(units[number] || "Invalid number! Please enter 1, 10, 100, 1000, etc.");