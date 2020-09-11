// class math {
//   constructor() {
//     this.randomInt = this.randomInt;
//     this.randomFloat = this.randomFloat;
//     this.randomOneIn = this.randomOneIn;
//     this.distance = this.distance;
//   }

//   randomInt(min, max) {
//     return Math.floor(this.randomFloat(min, max));
//   }

//   randomFloat(min, max) {
//     if (max === undefined) {
//       max = min;
//       min = 0;
//     }

//     return Math.random() * (max - min) + min;
//   }

//   randomOneIn(odds) {
//     return this.randomInt(odds) === 0;
//   }

//   distance(positionObj1, positionObj2) {
//     const deltaX = positionObj1.x - positionObj2.x;
//     const deltaY = positionObj1.y - positionObj2.y;
//     //a^2 + b^2 = c^2
//     return Math.sqrt(Math.pow(deltaX, 2) + Math.pos(deltaY, 2));
//   }
// }

function randomFloat(min, max) {
  if (max === undefined) {
    max = min;
    min = 0;
  }

  return Math.random() * (max - min) + min;
}

function randomInt(min, max) {
  return Math.floor(randomFloat(min, max));
}

function distance(positionObj1, positionObj2) {
  const deltaX = positionObj1.x - positionObj2.x;
  const deltaY = positionObj1.y - positionObj2.y;
  //a^2 + b^2 = c^2
  return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
}

const math = {
  distance,
  randomInt,
  randomFloat,
};

export default math;
