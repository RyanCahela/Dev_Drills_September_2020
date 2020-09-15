import Texture from "./Texture";

const Sprite = (url, spawnPosX = 0, spawnPosY = 0) => {
  const texture = Texture(url);
  const position = { x: spawnPosX, y: spawnPosY };
  let anchor = { x: 0, y: 0 };

  return Object.freeze({
    texture,
    position,
    get anchor() {
      return anchor;
    },
    set anchor(newAnchor) {
      console.log(newAnchor);
      anchor = newAnchor;
    },
  });
};

export default Sprite;
