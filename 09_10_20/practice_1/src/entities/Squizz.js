import TileSprite from "../lib/TileSprite";
import Texture from "../lib/Texture";
import math from "../utils/math";
const texture = new Texture("./resources/player-walk.png");

class Squizz extends TileSprite {
  constructor(animationSpeed, controls) {
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
    this.controls = controls;
    this.speed = math.randomInt(20, 100);
  }

  update(deltaTime, currentTime) {
    //animate
    this.currentAnimTime += deltaTime;
    if (this.currentAnimTime > this.rate) {
      this.currentAnimFrame = ++this.currentAnimFrame % this.frames.length;
      this.frame = this.frames[this.currentAnimFrame];
      this.currentAnimTime -= this.rate;
    }

    //movement
    this.position.x = this.controls.position.x;
    this.position.y = this.controls.position.y;
  }
}

export default Squizz;
