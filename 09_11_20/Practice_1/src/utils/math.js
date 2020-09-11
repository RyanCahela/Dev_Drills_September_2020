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

function distance(positionObj1, positionObj2) {
  const deltaY = positionObj1.y - positionObj2.y;
  const deltaX = positionObj1.x - positionObj2.x;
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
