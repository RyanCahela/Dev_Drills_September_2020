import Sprite from "./lib/Sprite";
import KeyboardControls from "./lib/KeyboardControls";
import Bullet from "./Bullet";
import BulletContainer from "./BulletContainer";
import Textures from "./Textures";

class Spaceship extends Sprite {
  constructor(constrainX, constrainY, BulletContainer) {
    super(Textures.spaceship);
    this.controls = new KeyboardControls();
    this.speed = 500;
    this.constrainX = constrainX;
    this.constrainY = constrainY;
    this.shipWidth = 32;
    this.shipHeight = 32;
    this.FIRE_RATE = 0.5;
    this.timeOfLastBullet = 0;
    this.weapon = BulletContainer;
  }

  fire(spawnPosX, spawnPosY) {
    this.weapon.fire(spawnPosX, spawnPosY);
  }

  update(deltaTime, currentTime) {
    const {
      position,
      speed,
      controls,
      constrainX,
      constrainY,
      shipHeight,
      shipWidth,
    } = this;

    //Movement Controls
    position.x += controls.x * speed * deltaTime;
    position.y += controls.y * speed * deltaTime;

    if (controls.action) {
      const { FIRE_RATE } = this;
      if (currentTime - this.timeOfLastBullet < FIRE_RATE) return;
      this.timeOfLastBullet = currentTime;
      this.fire(position.x, position.y);
    }

    if (position.x < 0) position.x = 0;
    if (position.y < 0) position.y = 0;
    if (position.x > constrainX - shipWidth) {
      position.x = constrainX - shipWidth;
    }
    if (position.y > constrainY - shipHeight) {
      position.y = constrainY - shipHeight;
    }
  }
}

export default Spaceship;
