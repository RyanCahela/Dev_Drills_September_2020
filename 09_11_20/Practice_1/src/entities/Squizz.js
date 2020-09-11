import TileSprite from "../lib/TileSprite";
import Texture from "../lib/Texture";
import math from "../utils/math";

const texture = new Texture("./resources/player-walk.png");

class Squizz extends TileSprite {
  constructor(tileWidth, tileHeight) {
    super(texture, tileWidth, tileHeight);
    this.speed = math.randomInt(20, 100);
    this.currentAnimTime = 0;
    this.animationRate = 10 / this.speed;
    this.stunDuration = 3;
    this.currentFrame = 0;
    this.frames = [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 2, y: 0 },
      { x: 3, y: 0 },
    ];
    this.frame = this.frames[this.currentFrame];
  }

  update(deltaTime, currentTime) {
    this.position.x += this.speed * deltaTime;

    this.currentAnimTime += deltaTime;

    if (this.currentAnimTime > this.animationRate) {
      this.currentFrame = ++this.currentFrame % this.frames.length;
      this.frame = this.frames[this.currentFrame];
      this.currentAnimTime -= this.animationRate;
    }
  }
}

export default Squizz;
