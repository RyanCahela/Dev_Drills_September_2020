import Sprite from "../lib/Sprite";
import Texture from "../lib/Texture";

const texture = new Texture("./resources/enemy.png");

class Enemy extends Sprite {
  constructor(spawnPosX, spawnPosY) {
    super(texture);
    this.speed = 100;
    this.position.x = spawnPosX;
    this.position.y = spawnPosY;
  }

  update(deltaTime) {
    this.position.x -= this.speed * deltaTime;
  }
}

export default Enemy;
