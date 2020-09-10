import Sprite from "./Sprite";
class TileSprite extends Sprite {
  constructor(texture, width, height, animationSpeed, numberOfFrames) {
    super(texture);
    this.tileWidth = width;
    this.tileHeight = height;
    this.frame = { x: 0, y: 0 };
    this.animationSpeed = animationSpeed;
    this.numberOfFrames = numberOfFrames;
  }
}

export default TileSprite;
