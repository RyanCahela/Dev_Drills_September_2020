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

function distance(posObj1, posObj2) {
  const deltaX = posObj1.x - posObj2.x;
  const deltaY = posObj1.y - posObj2.y;
  //a^2 + b^2 = c^2
  return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
}

const math = {
  randomInt,
  randomFloat,
  randomOneIn,
  distance,
};

export default math;
