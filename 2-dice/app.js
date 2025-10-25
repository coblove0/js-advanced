function rollDice(diceType) {
  const maxValue = diceType.substring(1);
  return Math.floor(Math.random() * maxValue + 1);
}

console.log(rollDice('d4'));
console.log(rollDice('d6'));
console.log(rollDice('d8'));
console.log(rollDice('d10'));
console.log(rollDice('d12'));
console.log(rollDice('d16'));
console.log(rollDice('d20'));