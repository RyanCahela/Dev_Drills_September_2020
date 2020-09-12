function distance(positionObj1, positionObj2) {
  const deltaX = positionObj1.x - positionObj2.x;
  const deltaY = positionObj1.y - positionObj2.y;
  //a^2 + b^2 = c^2
  return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
}

const math = {
  distance,
};

export default math;
