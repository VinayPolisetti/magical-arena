// Arena class where players fight using the dice rolls to determine attack and defense outcomes.
class Arena {
    constructor(attackingDice, defendingDice) {
        this.attackingDice = attackingDice;
        this.defendingDice = defendingDice;
    }

    // Simulates a fight between the attacker and defender.
    // Calculates the attack and defense values based on dice rolls and updates the defender's health.
    fight(attacker, defender) {
        const attackRoll = this.attackingDice.roll();
        const defendRoll = this.defendingDice.roll();

        const attackDamage = attacker.attack * attackRoll;
        const defendValue = defender.strength * defendRoll;

        const netDamage = Math.max(attackDamage - defendValue, 0);
        defender.takeDamage(netDamage);

        return {
            attackRoll,
            defendRoll,
            attackDamage,
            defendValue,
            netDamage,
            defenderHealth: defender.health
        };
    }
}

module.exports = Arena;
