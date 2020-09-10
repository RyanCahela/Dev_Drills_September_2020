import TileSprite from "../lib/TileSprite";
import Texture from "../lib/Texture";
const texture = new Texture("./resources/player-walk.png");

class Squizz extends TileSprite {
  constructor(animationSpeed, numberOfFrames) {
    super(texture, 32, 32, animationSpeed, numberOfFrames);
  }

  update(deltaTime, currenTime) {
    const { animationSpeed, numberOfFrames } = this;
    this.frame.x = Math.floor((currenTime / animationSpeed) % numberOfFrames);
  }
}

export default Squizz;
