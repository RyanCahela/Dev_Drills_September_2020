import Sprite from "./Sprite";

class TileSprite extends Sprite {
  constructor(config = {}) {
    const {
      tileWidth = 32,
      tileHeight = 32,
      frame = { x: 0, y: 0 },
      textureUrl,
      spawnPosition,
      anchor,
      scale,
      rotation,
      pivot,
    } = config;
    super({
      textureUrl,
      spawnPosition,
      anchor,
      scale,
      rotation,
      pivot,
    });

    this.tileHeight = tileHeight;
    this.tileWidth = tileWidth;
    this.frame = frame;
  }
}

export default TileSprite;
