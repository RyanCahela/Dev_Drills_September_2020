import Sprite from "./lib/Sprite";
import textures from "./Textures";
class Enemy extends Sprite {
  constructor(spawnPosX, spawnPosY, speed = 400, constrainX) {
    super(textures.enemy);
    this.position.x = spawnPosX;
    this.position.y = spawnPosY;
    this.constrainX = constrainX;
    this.speed = speed;
  }

  update(deltaTime, currentTime) {
    this.position.x += -1 * this.speed * deltaTime;
    if (this.position.x < this.constrainX) {
      this.isDead = true;
    }
  }
}

export default Enemy;
