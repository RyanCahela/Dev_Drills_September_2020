import TileMap from "../lib/TileMap";
import { randomInt } from "../util/math";

class Level extends TileMap {
  constructor(config = {}) {
    const { width, height } = config;
    const tiles = [];
    const tileSize = 32;
    const mapWidth = Math.floor(width / tileSize);
    const mapHeight = Math.floor(height / tileSize);

    for (let y = 0; y < mapHeight; y++) {
      for (let x = 0; x < mapWidth; x++) {
        tiles.push({
          x: 2,
          y: 0,
        });
      }
    }

    super({
      textureUrl: "./resources/tiles.png",
      tileWidth: tileSize,
      tileHeight: tileSize,
      mapWidth,
      mapHeight,
      tiles,
    });

    this.lastTile = null;
    this.blankFrame = { x: 0, y: 0 };
  }

  checkGround(position) {
    const { lastTile, blankFrame } = this;
    const tile = this.getTileByPixlePosition(position);
    console.log(tile);
    if (tile === lastTile) {
      return "checked";
    }
    this.lastTile = tile;
    if (tile.frame !== blankFrame) {
      this.setFrameAtPixelPosition(position, blankFrame);
      return "solid";
    }
    return "cleared";
  }
}

export default Level;
