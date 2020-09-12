import Texture from "../lib/Texture";
import Sprite from "../lib/Sprite";
import KeyboardControls from "../lib/KeyboardControls";

const texture = new Texture("./resources/spaceship.png");

class Spaceship extends Sprite {
  constructor(playAreaWidth, playAreaHeight) {
    super(texture);
    this.controls = new KeyboardControls();
    this.playAreaHeight = playAreaHeight;
    this.playAreaWidth = playAreaWidth;
    this.speed = 300;
    this.height = 32;
    this.width = 32;
    this.fireRate = 0.5;
    this.isFireing = false;
    this.timeSinceLastShot = 0;

    //spawn location
    this.position.x = playAreaWidth - playAreaWidth / 3;
    this.position.y = playAreaHeight / 2;
  }

  update(deltaTime, currentTime) {
    this.position.x += this.controls.x * this.speed * deltaTime;
    this.position.y += this.controls.y * this.speed * deltaTime;

    const { position, playAreaHeight, playAreaWidth, width, height } = this;

    //constrain movement
    if (position.x < 0) position.x = 0;
    if (position.y < 0) position.y = 0;
    if (position.x > playAreaWidth - width) {
      position.x = playAreaWidth - width;
    }
    if (position.y > playAreaHeight - height) {
      position.y = playAreaHeight - height;
    }

    //how to decouple
    if (this.controls.action) {
      if (this.fireRate < currentTime - this.timeSinceLastShot) {
        this.isFireing = true;
        this.timeSinceLastShot = currentTime;
      } else {
        this.isFireing = false;
      }
    }
  }
}

export default Spaceship;
