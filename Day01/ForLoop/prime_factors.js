// Read 'N' from the command-line argument
let n = parseInt(process.argv[2]);

if (isNaN(n) || n <= 1) {
    console.log("Please enter an integer greater than 1.");
} else {
    console.log(`Prime factors of ${n}:`);
    
    // Print number of 2s that divide n
    while (n % 2 === 0) {
        console.log(2);
        n = n / 2;
    }

    // Check for odd factors
    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            console.log(i);
            n = n / i;
        }
    }

    // If n is still a prime number
    if (n > 2) {
        console.log(n);
    }
}