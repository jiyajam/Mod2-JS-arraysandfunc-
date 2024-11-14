const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numbers = [];
let enteredNumbers = new Set();

function askForNumber() {
    rl.question('Enter a number (or a previously entered number to stop): ', (input) => {
        const number = parseFloat(input);
        if (isNaN(number)) {
            console.log("That's not a valid number. Please try again.");
            askForNumber();
        }

        if (enteredNumbers.has(number)) {
            console.log(`The number ${number} has already been given.`);
            numbers.sort((a, b) => a - b);

            console.log('Given numbers in ascending order:', numbers);
            rl.close();
        } else {
            numbers.push(number);
            enteredNumbers.add(number);
            askForNumber();

        }
    });
}



askForNumber();