import Sprite from "./Sprite";

const TileSprite = (params) => {
  const {
    textureUrl,
    spawnPositionX,
    spawnPositionY,
    tileWidth,
    tileHeight,
  } = params;

  const sprite = Sprite({
    textureUrl,
    spawnPositionX,
    spawnPositionY,
  });

  const getProps = () => {
    return {
      position: sprite.getProps().position,
      tileWidth,
      tileHeight,
    };
  };

  const setProps = (params) => {
    const { position } = params;
    if (position) sprite.setProps({ position });
  };

  return Object.freeze({
    getProps,
    setProps,
    texture: sprite.texture,
    tileWidth,
    tileHeight,
  });
};

export default TileSprite;
