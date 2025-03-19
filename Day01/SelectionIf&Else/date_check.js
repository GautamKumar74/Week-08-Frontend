const args = process.argv.slice(2);
const day = parseInt(args[0]);
const month = parseInt(args[1]);

function isDateInRange(day, month) {
    if (month < 3 || month > 6) {
        return false;
    }
    if (month === 3 && day < 20) {
        return false;
    }
    if (month === 6 && day > 20) {
        return false;
    }
    return true;
}

console.log(isDateInRange(day, month));