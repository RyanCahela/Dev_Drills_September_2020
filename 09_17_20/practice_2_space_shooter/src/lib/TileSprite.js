import Sprite from "./Sprite";

const TileSprite = (params) => {
  const { textureUrl, tileWidth, tileHeight } = params;
  const sprite = Sprite({ textureUrl });
  const { texture, position } = sprite.getState();
  const currentframe = { x: 0, y: 0 };

  const setState = (newState) => {
    const { textureUrl, position, frame } = newState;
    if (textureUrl) sprite.setState({ textureUrl });
    if (position) {
      const { x: newX, y: newY } = position;
      const newPosition = {
        x: newX ? newX : 0,
        y: newY ? newY : 0,
      };
      sprite.setState({ position: newPosition });
    }
    if (frame) {
      const { x: newX, y: newY } = frame;
      currentframe.x = newX ? newX : 0;
      currentframe.y = newY ? newY : 0;
    }
  };

  const getState = () => {
    return {
      position,
      tileWidth,
      tileHeight,
      texture,
      frame: currentframe,
    };
  };

  return Object.freeze({
    getState,
    setState,
  });
};

export default TileSprite;
