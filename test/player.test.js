const Player = require('../src/player');

describe('Player Class', () => {
    test('should correctly initialize player attributes', () => {
        const player = new Player('Player A', 50, 5, 10);
        expect(player.name).toBe('Player A');
        expect(player.health).toBe(50);
        expect(player.strength).toBe(5);
        expect(player.attack).toBe(10);
    });

    test('should correctly check if player is alive', () => {
        const player = new Player('Player B', 0, 5, 10);
        expect(player.isAlive()).toBe(false);
    });

    test('should correctly take damage', () => {
        const player = new Player('Player C', 50, 5, 10);
        player.takeDamage(20);
        expect(player.health).toBe(30);
    });
});
