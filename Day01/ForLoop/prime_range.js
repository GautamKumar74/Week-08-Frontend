// Read range start and end from command-line arguments
let start = parseInt(process.argv[2]);
let end = parseInt(process.argv[3]);

if (isNaN(start) || isNaN(end) || start < 2 || end < start) {
    console.log("Please enter a valid range (start >= 2 and end >= start).");
} else {
    console.log(`Prime numbers between ${start} and ${end}:`);
    for (let num = start; num <= end; num++) {
        let isPrime = true;
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) console.log(num);
    }
}