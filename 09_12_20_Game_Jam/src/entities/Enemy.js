import Sprite from "../lib/Sprite";
import Texture from "../lib/Texture";
import DiesAtPosition from "../lib/DiesAtPosition";
import { WIDTH_OF_ENEMY } from "../utils/constants";

const texture = new Texture("./resources/enemy.png");

class Enemy extends Sprite {
  constructor(spawnPosX, spawnPosY) {
    super(texture);
    this.speed = 100;
    this.position.x = spawnPosX;
    this.position.y = spawnPosY;
    this.DiesAtPosition = new DiesAtPosition({
      positionToDie: { x: 0 - WIDTH_OF_ENEMY },
      thingToMarkIsDead: this,
      moving: "right-to-left",
    });
  }

  update(deltaTime) {
    this.position.x -= this.speed * deltaTime;
    this.DiesAtPosition.checkIfDead(this.position);
  }
}

export default Enemy;
