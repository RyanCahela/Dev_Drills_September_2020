import TileMap from "./TileMap";

const Level = (params) => {
  const { width, height } = params;
  const tileSize = 32;
  const mapWidthUnits = width / tileSize;
  const mapHeightUnits = height / tileSize;
  const tiles = [];

  for (let y = 0; y < mapHeightUnits; y++) {
    for (let x = 0; x < mapWidthUnits; x++) {
      tiles.push({ x, y });
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

  return Object.freeze({});
};

export default Level;
