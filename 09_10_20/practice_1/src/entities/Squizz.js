import TileSprite from "../lib/TileSprite";
import Texture from "../lib/Texture";
import math from "../utils/math";
const texture = new Texture("./resources/player-walk.png");

class Squizz extends TileSprite {
  constructor(animationSpeed) {
    super(texture, 32, 32, animationSpeed);
    //animation variables
    this.rate = animationSpeed;
    this.currentAnimTime = 0;
    this.currentAnimFrame = 0;
    this.frames = [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 2, y: 0 },
      { x: 3, y: 0 },
    ];
    this.frame = this.frames[this.currentAnimFrame];

    //movement variables
    this.speed = math.randomInt(20, 100);
    this.isStunned = false;
    this.stunDuration = 5;
    this.currentStunTime = 0;
    this.anchor = { x: -16, y: -16 };
  }

  update(deltaTime, currentTime) {
    //movement
    if (this.speed === 0) {
      this.currentStunTime += deltaTime;
      //remove stun after stun duration
      if (this.currentStunTime > this.stunDuration) {
        this.speed = math.randomInt(20, 100);
        this.currentStunTime -= this.stunDuration;
      }
      return;
    }

    //animate
    if (this.speed !== 0) {
      this.currentAnimTime += deltaTime;
      if (this.currentAnimTime > this.rate) {
        this.currentAnimFrame = ++this.currentAnimFrame % this.frames.length;
        this.frame = this.frames[this.currentAnimFrame];
        this.currentAnimTime -= this.rate;
      }
    }

    this.position.x += this.speed * deltaTime;
  }
}

export default Squizz;
