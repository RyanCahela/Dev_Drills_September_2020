import Sprite from "./Sprite";

class TileSprite extends Sprite {
  constructor(texture, tileWidth, tileHeight) {
    super(texture);
    this.tileWidth = tileWidth;
    this.tileHeight = tileHeight;
    this.frame = { x: 0, y: 0 };
  }
}

export default TileSprite;
