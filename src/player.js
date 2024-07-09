// Represents a player in the game with attributes for name, health, strength, and attack.
class Player {
    constructor(name, health, strength, attack) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.attack = attack;
    }

    // Checks if the player is still alive (health > 0).
    isAlive() {
        return this.health > 0;
    }

    // Reduces the player's health by the specified damage amount, ensuring health doesn't drop below 0.
    takeDamage(damage) {
        this.health = Math.max(this.health - damage, 0);
    }
}

module.exports = Player;
