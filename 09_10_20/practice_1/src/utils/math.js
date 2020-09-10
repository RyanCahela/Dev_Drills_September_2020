function randomInt(min, max) {
  return Math.floor(randomFloat(min, max));
}

function randomFloat(min, max) {
  if (max === undefined) {
    max = min;
    min = 0;
  }

  return Math.random() * (max - min) + min;
}

function randomOneIn(odds) {
  return randomInt(odds) === 0;
}

export { randomOneIn, randomFloat, randomInt };
