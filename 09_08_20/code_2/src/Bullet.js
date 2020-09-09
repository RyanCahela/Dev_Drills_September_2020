import Sprite from "./lib/Sprite";
import textures from "./Textures";

class Bullet extends Sprite {
  constructor(spawnPosX, spawnPosY, constrainX = 9999) {
    super(textures.bullet);
    this.position.x = spawnPosX;
    this.position.y = spawnPosY;
    this.constrainX = constrainX;
    this.speed = 300;
  }

  update(deltaTime, currentTime) {
    const { speed, position, constrainX } = this;
    position.x += speed * deltaTime;

    if (position.x > constrainX) {
      this.isDead = true;
    }
  }

  get x() {
    return this.position.x;
  }

  get y() {
    return this.position.y;
  }
}
export default Bullet;
