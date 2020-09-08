import Bullet from "./Bullet";
import Container from "./lib/Container";

class BulletContainer extends Container {
  constructor() {
    super();
    const FIRE_RATE = 0.5;
  }

  fire(spawnPosX, spawnPosY) {
    const bullet = new Bullet(spawnPosX, spawnPosY);
    this.add(bullet);
  }
}

export default BulletContainer;
