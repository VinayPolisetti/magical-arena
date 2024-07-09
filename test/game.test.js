const Game = require('../src/game');
const Player = require('../src/player');

describe('Game Class', () => {
    test('should correctly determine the winner', () => {
        const playerA = new Player('Player A', 50, 5, 10);
        const playerB = new Player('Player B', 100, 10, 5);
        const game = new Game(playerA, playerB);

        game.start();

        expect(playerA.health === 0 || playerB.health === 0).toBe(true);
    });
});
