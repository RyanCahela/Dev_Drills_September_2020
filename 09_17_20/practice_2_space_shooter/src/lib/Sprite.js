import Texture from "./Texture";

const Sprite = (params) => {
  const textureUrl = params.textureUrl
    ? params.textureUrl
    : "./resources/place_holder.png";
  const currentTexture = Texture(textureUrl);
  const currentPosition = { x: 0, y: 0 };

  const setState = (newState) => {
    if (newState.textureUrl) {
      currentTexture = Texture(newState.textureUrl);
    }

    if (newState.position) {
      const { x: newX, y: newY } = newState.position;
      currentPosition.x = newX ? newX : 0;
      currentPosition.y = newY ? newY : 0;
    }
  };

  const getState = () => {
    return {
      texture: currentTexture,
      position: currentPosition,
    };
  };

  return Object.freeze({
    getState,
    setState,
  });
};

export default Sprite;
