function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}


function rolluntilyouhaveSix() {
    const rolls = [];
    let roll;

    do {
        roll = rollDice();
        rolls.push(roll);
        console.log(`Rolled: ${roll}`);
    } while (roll !== 6);

    console.log("Final rolls:", rolls);
}

rolluntilyouhaveSix();
