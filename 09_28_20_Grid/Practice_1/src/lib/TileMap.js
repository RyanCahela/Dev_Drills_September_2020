import Container from "./Container";
import TileSprite from "./TileSprite";

class TileMap extends Container {
  constructor(config = {}) {
    const {
      tiles,
      mapWidth,
      mapHeight,
      tileWidth,
      tileHeight,
      textureUrl,
    } = config;
    super();

    this.tileHeight = tileHeight;
    this.tileWidth = tileWidth;
    this.mapWidth = mapWidth;
    this.mapHeight = mapHeight;

    this.nodes = tiles.map((frame, index) => {
      return new TileSprite({
        textureUrl,
        tileWidth,
        tileHeight,
        frame,
        spawnPosition: {
          x: (index % mapWidth) * tileWidth,
          y: Math.floor(index / mapWidth) * tileHeight,
        },
      });
    });
  }

  convertPixlePositionToMapPosition(pixlePosition = {}) {
    return {
      x: Math.floor(pixlePosition.x / this.tileWidth),
      y: Math.floor(pixlePosition.y / this.tileHeight),
    };
  }

  convertMapPositionToPixlePosition(mapPosition = {}) {
    return {
      x: gridPosition.x * tileWidth,
      y: gridPosition.y * tileHeight,
    };
  }

  getTileByMapPosition(mapPosition) {
    const tile = this.nodes[mapPosition.y * this.mapWidth + mapPosition.x];
    return tile;
  }

  getTileByPixlePosition(pixlePosition) {
    const mapPosition = this.convertPixlePositionToMapPosition(pixlePosition);
    return this.getTileByMapPosition(mapPosition);
  }

  setFrameAtMapPosition(mapPosition, frame) {
    const tile = this.getTileByMapPosition(mapPosition);
    tile.frame = frame;
    return tile;
  }

  setFrameAtPixelPosition(pixlePosition, frame) {
    const mapPosition = this.convertPixlePositionToMapPosition(pixlePosition);
    return this.setFrameAtMapPosition(mapPosition, frame);
  }
}

export default TileMap;
