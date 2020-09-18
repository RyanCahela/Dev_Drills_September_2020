import TileMap from "./TileMap";
import { randomInt } from "../utils/math";

const Level = (params) => {
  const { width, height } = params;
  const tileSize = 32;
  const mapWidthUnits = width / tileSize;
  const mapHeightUnits = height / tileSize;
  const tiles = [];
  const topBounds = 0;
  const bottomBounds = height - tileSize;
  const leftBounds = 0;
  const rightBounds = width - tileSize;

  for (let y = 0; y < mapHeightUnits; y++) {
    for (let x = 0; x < mapWidthUnits; x++) {
      tiles.push({
        x: randomInt(5),
        y: randomInt(2),
      });
    }
  }

  const tileMap = TileMap({
    tiles,
    mapWidthUnits,
    mapHeightUnits,
    tileWidth: tileSize,
    tileHeight: tileSize,
    textureUrl: "./resources/tiles.png",
  });

  const getState = () => {
    const { nodes, position } = tileMap.getState();
    return {
      nodes,
      position,
      tileSize,
      topBounds,
      bottomBounds,
      rightBounds,
      leftBounds,
    };
  };

  return Object.freeze({
    getState,
  });
};

export default Level;
