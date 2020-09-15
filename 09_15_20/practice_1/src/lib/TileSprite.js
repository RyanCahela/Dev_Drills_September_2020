import Sprite from "./Sprite";

const TileSprite = (texture, tileWidth, tileHeight) => {
  const spriteObj = Sprite(texture);
  const frame = { x: 0, y: 0 };

  return Object.freeze({
    set anchor(newAnchor) {
      spriteObj.anchor = newAnchor;
    },
    get anchor() {
      return spriteObj.anchor;
    },
    frame,
    position: spriteObj.position,
    texture: spriteObj.texture,
    tileWidth,
    tileHeight,
  });
};

export default TileSprite;
