// Take year as a command-line argument
let year = parseInt(process.argv[2]);

if (year.toString().length !== 4) {
    console.log("Please enter a 4-digit year.");
} else {
    let isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    console.log(`Year ${year} is ${isLeap ? "a Leap Year" : "not a Leap Year"}`);
}
