function randomInt(min, max) {
  return Math.floor(randomFloat(min, max));
}

function randomFloat(min, max) {
  if (max === undefined) {
    max = min || 1;
    min = 0;
  }
  return Math.random() * (max - min) + min;
}

function randomOneIn(max) {
  return randomInt(max) === 0;
}

export { randomFloat, randomInt, randomOneIn };
