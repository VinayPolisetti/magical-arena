const Player = require('./player');
const Game = require('./game');

// Creating players with initial attributes.
const playerA = new Player('Player A', 50, 5, 10);
const playerB = new Player('Player B', 100, 10, 5);

// Initializing the game with the players.
const game = new Game(playerA, playerB);

// Starting the game.
game.start();
