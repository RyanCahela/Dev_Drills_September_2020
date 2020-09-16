import Texture from "./Texture";

const Sprite = (params = {}) => {
  let { spawnPositionX, spawnPositionY, textureUrl } = params;
  if (spawnPositionX === undefined) spawnPositionX = 0;
  if (spawnPositionY === undefined) spawnPositionY = 0;
  if (textureUrl === undefined) textureUrl = "./resources/place_holder.png";

  let currentPosition = { x: spawnPositionX, y: spawnPositionY };
  const texture = Texture({
    textureUrl: textureUrl,
  });

  const getProps = () => {
    return {
      position: currentPosition,
      texture,
    };
  };

  const setProps = (params) => {
    const { position } = params;
    if (position.x) currentPosition.x = position.x;
    if (position.y) currentPosition.y = position.y;
  };

  return Object.freeze({
    getProps,
    setProps,
    texture,
  });
};

export default Sprite;
