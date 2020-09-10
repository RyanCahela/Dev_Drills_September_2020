import Sprite from "./Sprite";
class TileSprite extends Sprite {
  constructor(texture, width, height) {
    super(texture);
    this.tileWidth = width;
    this.tileHeight = height;
    this.frame = { x: 0, y: 0 };
    this.animationSpeed = 0.1;
    this.numberOfAnimationFrames = 4;
  }

  update(deltaTime, currentTime) {
    this.frame.x =
      (currentTime / this.animationSpeed) % this.numberOfAnimationFrames;
  }
}

export default TileSprite;
