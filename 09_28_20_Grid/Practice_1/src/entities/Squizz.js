import TileSprite from "../lib/TileSprite";
import AnimationManager from "../lib/AnimationManager";

class Squizz extends TileSprite {
  constructor(config = {}) {
    const { spawnPosition = { x: 0, y: 0 }, controls } = config;
    const tileSize = 32;
    const initialFrame = { x: 0, y: 1 };
    super({
      textureUrl: "./resources/player-walk.png",
      anchor: { x: 0, y: 0 },
      tileWidth: tileSize,
      tileHeight: tileSize,
      spawnPosition,
    });
    this.tileSize = tileSize;
    this.controls = controls;
    this.speed = 0.5;
    this.direction = { x: 1, y: 0 };
    this.frame = initialFrame;

    //set up animations
    this.animationManager = new AnimationManager();
    this.animationManager.add({
      name: "walk",
      rate: 0.5,
      frames: [
        { x: 0, y: 1 },
        { x: 1, y: 1 },
        { x: 2, y: 1 },
        { x: 3, y: 1 },
      ],
    });
    this.animationManager.play("walk");
  }

  update(deltaTime, currentTime) {
    const {
      tileSize,
      speed,
      position,
      controls,
      direction,
      animationManager,
    } = this;

    //handle animation
    animationManager.update(deltaTime, currentTime);
    if (animationManager.currentFrame) {
      this.frame = animationManager.currentFrame;
    }

    //handle movement
    if (controls.x && controls.x !== direction.x) {
      this.direction.y = 0;
      this.direction.x = controls.x;
      this.position.y = Math.round(position.y / tileSize) * tileSize;
    } else if (controls.y && controls.y !== direction.y) {
      this.direction.y = controls.y;
      this.direction.x = 0;
      this.position.x = Math.round(position.x / tileSize) * tileSize;
    }

    this.position.x = this.position.x + direction.x * (32 / speed) * deltaTime;
    this.position.y = this.position.y + direction.y * (32 / speed) * deltaTime;
  }
}

export default Squizz;
