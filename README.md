# Magical Arena Game

## Overview
Magical Arena is a turn-based combat game where two players, each with unique attributes, face off in a battle until one player's health reaches zero. The game involves rolling dice to determine attack and defense outcomes, and the player's health is adjusted based on these outcomes.

## Features
- Two players with attributes: health, strength, and attack.
- Turn-based combat where players roll dice to determine attack and defense values.
- The game continues until one player's health reaches zero.
- Flexible dice interface allowing for different implementations of dice rolls.

## Project Structure
```
├── src
│   ├── interfaces
│   │   └── dice.js
│   ├── arena.js
│   ├── dice.js
│   ├── game.js
│   ├── player.js
│   └── utils.js
├── tests
│   ├── arena.test.js
│   ├── dice.test.js
│   ├── game.test.js
│   └── utils.test.js
├── package.json
└── README.md
```

## Setup

### Prerequisites
- Node.js (v12.x or higher)
- npm (v6.x or higher)

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/magical-arena.git
    ```
2. Navigate to the project directory:
    ```bash
    cd magical-arena
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

### Running the Game
To start the game, run the following command:
```bash
node src/main.js
```

### Running Tests
To run the tests, use the following command:
```bash
npm test
```

## Detailed Explanation

### Player Class
The `Player` class defines a player with attributes for name, health, strength, and attack. It includes methods to check if the player is alive and to take damage.

### Dice Interface
The `Dice` interface requires an implementation of the `roll` method. This allows for flexibility in how dice rolls are generated.

### StandardDice Class
The `StandardDice` class implements the `Dice` interface, providing a standard 6-sided dice roll mechanism.

### Arena Class
The `Arena` class simulates the combat between two players. It calculates attack and defense values based on dice rolls and updates the defender's health accordingly.

### Game Class
The `Game` class manages the overall game flow. It determines the first attacker, handles turn switching, and manages the game loop until a player wins.

### Utils
The `utils.js` file contains helper functions, such as logging fight details.

## Example Usage
To create a new game with two players and start it, please free to make a copy of the main.js and modify it or oyu cna find it below
```javascript
const Player = require('./src/player');
const Game = require('./src/game');

const playerA = new Player('Player A', 50, 5, 10);
const playerB = new Player('Player B', 100, 10, 5);

const game = new Game(playerA, playerB);
game.start();
```