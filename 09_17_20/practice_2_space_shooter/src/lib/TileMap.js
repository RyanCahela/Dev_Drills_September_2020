import Container from "./Container";
import TileSprite from "./TileSprite";

const TileMap = (params) => {
  const {
    tiles,
    mapWidthUnits,
    mapHeightUnits,
    tileWidth,
    tileHeight,
    textureUrl,
  } = params;
  const container = Container();

  tiles.forEach((frame, index) => {
    const tileSprite = TileSprite({
      textureUrl,
      tileWidth,
      tileHeight,
    });

    tileSprite.setState({
      frame,
      position: {
        x: (index % mapWidthUnits) * tileWidth,
        y: Math.floor(index / mapWidthUnits) * tileHeight,
      },
    });
    container.add(tileSprite);
  });

  const getState = () => {
    const { nodes, position } = container.getState();
    return {
      nodes,
      position,
    };
  };

  return Object.freeze({
    getState,
  });
};

export default TileMap;
