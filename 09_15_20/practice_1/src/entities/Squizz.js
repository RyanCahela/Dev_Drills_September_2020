import TileSprite from "../lib/TileSprite";
import AnimationManager from "../lib/AnimationManager";

const Squizz = (spawnPosX = 0, spawnPosY = 0) => {
  const tileSprite = TileSprite("./resources/player-walk.png", 32, 32);
  const animationManager = AnimationManager();
  tileSprite.anchor = { x: -16, y: -16 };
  tileSprite.position.x = spawnPosX;
  tileSprite.position.y = spawnPosY;
  let speed = 100;
  let isDead = false;
  animationManager.add(
    "walk",
    [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 2, y: 0 },
      { x: 3, y: 0 },
    ],
    0.5
  );

  animationManager.add(
    "idle",
    [
      { x: 0, y: 1 },
      { x: 1, y: 1 },
      { x: 2, y: 1 },
      { x: 3, y: 1 },
    ],
    0.5
  );
  animationManager.play("walk");

  const update = (deltaTime) => {
    tileSprite.position.x += speed * deltaTime;
    if (speed === 0) {
      animationManager.play("idle");
    } else {
      animationManager.play("walk");
    }
    animationManager.update(deltaTime);
  };

  return Object.freeze({
    set isDead(bool) {
      isDead = bool;
    },
    get isDead() {
      return isDead;
    },
    set speed(newSpeed) {
      speed = newSpeed;
    },
    get speed() {
      return speed;
    },
    get frame() {
      return animationManager.frame;
    },
    anchor: tileSprite.anchor,
    position: tileSprite.position,
    texture: tileSprite.texture,
    tileWidth: tileSprite.tileWidth,
    tileHeight: tileSprite.tileHeight,
    update,
  });
};

export default Squizz;
