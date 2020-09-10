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

function distance(posObjA, posObjB) {
  const deltaX = posObjA.x - posObjB.x;
  const deltaY = posObjA.y - posObjB.y;
  //a^2 + b^2 = c^2; '^' means squared
  return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
}

const math = {
  randomOneIn,
  randomInt,
  randomFloat,
  distance,
};

export default math;
