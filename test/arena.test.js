const Arena = require('../src/arena');
const Player = require('../src/player');
const StandardDice = require('../src/dice');

describe('Arena Class', () => {
    test('should correctly calculate fight outcomes', () => {
        const arena = new Arena(new StandardDice(), new StandardDice());
        const playerA = new Player('Player A', 50, 5, 10);
        const playerB = new Player('Player B', 100, 10, 5);

        const result = arena.fight(playerA, playerB);

        expect(result.attackRoll).toBeGreaterThanOrEqual(1);
        expect(result.attackRoll).toBeLessThanOrEqual(6);
        expect(result.defendRoll).toBeGreaterThanOrEqual(1);
        expect(result.defendRoll).toBeLessThanOrEqual(6);
        expect(result.attackDamage).toBeGreaterThanOrEqual(10);
        expect(result.attackDamage).toBeLessThanOrEqual(60);
        expect(result.defendValue).toBeGreaterThanOrEqual(10);
        expect(result.defendValue).toBeLessThanOrEqual(60);
        expect(result.netDamage).toBeGreaterThanOrEqual(0);
        expect(result.defenderHealth).toBeLessThanOrEqual(100);
    });
});
