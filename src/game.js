const Arena = require('./arena');
const { logFightDetails } = require('./utils');
const StandardDice = require('./dice');

class Game {
    constructor(playerA, playerB) {
        this.players = [playerA, playerB];
        this.arena = new Arena(new StandardDice(), new StandardDice());
        this.currentAttackerIndex = null;
    }

    // Determines which player will attack first based on their health (player with les health starts first currently)
    determineFirstAttacker() {
        this.players.sort((a, b) => a.health - b.health);
        this.currentAttackerIndex = 0;
    }

    // Switches the turn between the two players.
    switchTurn() {
        this.currentAttackerIndex = 1 - this.currentAttackerIndex;
    }

    // Starts the game and continues until one player is defeated.
    start() {
        this.determineFirstAttacker();
        let round = 1;

        while (this.players.every(player => player.isAlive())) {
            const attacker = this.players[this.currentAttackerIndex];
            const defender = this.players[1 - this.currentAttackerIndex];

            const fightDetails = this.arena.fight(attacker, defender);
            logFightDetails(round, attacker, defender, fightDetails);

            if (!defender.isAlive()) {
                break;
            }

            this.switchTurn();
            round++;
        }

        const winner = this.players[this.currentAttackerIndex]; // The last attacker wins always.
        console.log(`${winner.name} wins the match!`);
    }
}

module.exports = Game;
