function randomInt(min, max) {
  //return a random integer
  return Math.floor(randomFloat(min, max));
}

function randomFloat(min, max) {
  ///return a random float
  if (max === undefined) {
    max = min || 1;
    min = 0;
  }

  return Math.random() * (max - min) + min;
}

function randomOneIn(max = 2) {
  return randomInt(0, odds) === 0;
}

function randomOneFromArr(arr) {
  return arr[randomInt(arr.length)];
}

export { randomInt, randomFloat, randomOneIn };
