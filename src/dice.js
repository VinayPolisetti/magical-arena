const Dice = require('./interfaces/dice');

// StandardDice class that implements the Dice interface.
// Rolls a dice with a specified number of sides (default is 6).
class StandardDice extends Dice {
    constructor(sides = 6) {
        super();
        this.sides = sides;
    }

    // Rolls the dice and returns a random number between 1 and the number of sides.
    roll() {
        return Math.floor(Math.random() * this.sides) + 1;
    }
}

module.exports = StandardDice;
