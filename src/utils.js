// Logs the details of each fight round.
function logFightDetails(round, attacker, defender, details) {
    console.log(`Round ${round}`);
    console.log(`${attacker.name} attacks ${defender.name}`);
    console.log(`Attack Roll: ${details.attackRoll}, Defend Roll: ${details.defendRoll}`);
    console.log(`Attack Damage: ${details.attackDamage}, Defend Value: ${details.defendValue}`);
    console.log(`Net Damage: ${details.netDamage}, ${defender.name} Health: ${details.defenderHealth}`);
    console.log('-----------------------------------');
}

module.exports = { logFightDetails };

