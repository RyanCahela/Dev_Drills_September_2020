import Sprite from "../lib/Sprite";
import Texture from "../lib/Texture";
import DiesAtPosition from "../lib/DiesAtPosition";
import { WIDTH } from "../utils/constants";

const texture = new Texture("./resources/bullet.png");

class Bullet extends Sprite {
  constructor(spawnPositionX, spawnPositionY) {
    super(texture);
    this.position.x = spawnPositionX;
    this.position.y = spawnPositionY;
    this.speed = 300;
    this.DiesAtPosition = new DiesAtPosition({
      positionToDie: { x: WIDTH },
      thingToMarkIsDead: this,
      moving: "left-to-right",
    });
  }

  update(deltaTime, currentTime) {
    this.position.x += this.speed * deltaTime;
    this.DiesAtPosition.checkIfDead(this.position);
  }
}

export default Bullet;
