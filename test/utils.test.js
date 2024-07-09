const { logFightDetails } = require('../src/utils');

describe('Utils Function', () => {
    test('should log fight details without errors', () => {
        const attacker = { name: 'Player A' };
        const defender = { name: 'Player B' };
        const details = {
            attackRoll: 3,
            defendRoll: 2,
            attackDamage: 30,
            defendValue: 20,
            netDamage: 10,
            defenderHealth: 90
        };

        logFightDetails(1, attacker, defender, details);
        expect(true).toBe(true); // Just ensuring the function runs without throwing errors.
    });
});
