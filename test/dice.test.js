const StandardDice = require('../src/dice');

describe('StandardDice Class', () => {
    test('should roll a value between 1 and 6', () => {
        const dice = new StandardDice();
        for (let i = 0; i < 100; i++) {
            const roll = dice.roll();
            expect(roll).toBeGreaterThanOrEqual(1);
            expect(roll).toBeLessThanOrEqual(6);
        }
    });
});
