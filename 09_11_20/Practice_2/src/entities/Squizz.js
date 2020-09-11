import TileSprite from "../lib/TileSprite";
import Texture from "../lib/Texture";
import math from "../utils/math";

const texture = new Texture("./resources/player-walk.png");

class Squizz extends TileSprite {
  constructor(tileWidth, tileHeight) {
    super(texture, tileWidth, tileHeight);
    this.speed = math.randomInt(20, 100);
    this.currentAnimTime = 0;
    this.currentStunTime = 0;
    this.animRate = 0.5;
    this.stunDuration = 5;
    this.frames = [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 2, y: 0 },
      { x: 3, y: 0 },
    ];
    this.anchor = { x: -16, y: -16 };
  }

  update(deltaTime, currentTime) {
    this.position.x += this.speed * deltaTime;

    //handle being stunnded;
    if (this.speed === 0) {
      this.currentStunTime += deltaTime;

      if (this.currentStunTime > this.stunDuration) {
        this.speed = 20;
        this.currentStunTime -= this.stunDuration;
      }
      return;
    }

    //animate the sprite
    this.currentAnimTime += deltaTime;
    if (this.currentAnimTime > this.animRate) {
      this.frame = this.frames[this.currentFrame++ % this.frames.length];
      this.currentAnimTime -= this.animRate;
    }
  }
}

export default Squizz;
