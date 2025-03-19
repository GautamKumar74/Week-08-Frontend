// Read the number from the command-line argument
let num = parseInt(process.argv[2]);

if (isNaN(num) || num < 2) {
    console.log("Please enter an integer greater than 1.");
} else {
    let isPrime = true;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    console.log(isPrime ? `${num} is a Prime Number.` : `${num} is NOT a Prime Number.`);
}