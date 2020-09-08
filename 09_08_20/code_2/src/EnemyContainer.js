const { Container } = require("./lib");
import Conatiner from "./lib/Container";
import Enemy from "./Enemy";
class EnemyContainer extends Container {
  constructor() {
    super();
  }

  spawnEnemy(spawnPosX, spawnPosY, speed, constrainX) {
    const enemy = new Enemy(spawnPosX, spawnPosY, speed, constrainX);
    this.add(enemy);
  }
}

export default EnemyContainer;
