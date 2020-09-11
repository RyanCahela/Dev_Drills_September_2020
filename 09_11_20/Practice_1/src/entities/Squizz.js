import TileSprite from "../lib/TileSprite";
import Texture from "../lib/Texture";
import math from "../utils/math";

const texture = new Texture("./resources/player-walk.png");

class Squizz extends TileSprite {
  constructor(tileWidth, tileHeight) {
    super(texture, tileWidth, tileHeight);
    this.speed = math.randomInt(20, 100);
    this.anchor = { x: -16, y: -16 };
    this.currentAnimTime = 0;
    this.animationRate = 10 / this.speed;
    this.stunDuration = 5;
    this.currentStunTime = 0;
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

    if (this.speed === 0) {
      this.currentStunTime += deltaTime;
      if (this.currentStunTime > this.stunDuration) {
        this.speed = math.randomInt(20, 100);
        this.animationRate = 10 / this.speed;
        this.currentStunTime -= this.stunDuration;
      }
      return;
    }

    this.currentAnimTime += deltaTime;
    if (this.currentAnimTime > this.animationRate) {
      this.currentFrame = ++this.currentFrame % this.frames.length;
      this.frame = this.frames[this.currentFrame];
      this.currentAnimTime -= this.animationRate;
    }
  }
}

export default Squizz;
