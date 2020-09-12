import Sprite from "../lib/Sprite";
import Texture from "../lib/Texture";

const texture = new Texture("./resources/bullet.png");

class Bullet extends Sprite {
  constructor(spawnPositionX, spawnPositionY) {
    super(texture);
    this.position.x = spawnPositionX;
    this.position.y = spawnPositionY;
    this.speed = 300;
  }

  update(deltaTime, currentTime) {
    this.position.x += this.speed * deltaTime;
  }
}

export default Bullet;
