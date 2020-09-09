import Container from "./Container";
import CanvasRenderer from "./CanvasRenderer";

class Game {
  constructor(width, height, parentElementIdentifier) {
    this.renderer = new CanvasRenderer(width, height);
    document
      .querySelector(parentElementIdentifier)
      .appendChild(this.renderer.view);
    this.scene = new Container();
    this.deltaTime = 0;
    this.timeOfLastFrame = 0;
  }

  run(gameLoop = () => {}) {
    const STEP = 1 / 60;
    const MAX_FRAME = STEP * 5;
    const loop = (ms) => {
      console.log("loop");
      requestAnimationFrame(loop);
      const currentTime = ms / 1000;
      this.deltaTime = Math.min(currentTime - this.timeOfLastFrame, MAX_FRAME);
      this.timeOfLastFrame = currentTime;
      this.scene.update(this.deltaTime, currentTime);
      gameLoop(this.deltaTime, currentTime);
      this.renderer.render(this.scene);
    };
    requestAnimationFrame(loop);
  }

  add(entity) {
    return this.scene.add(entity);
  }

  remove(entity) {
    return this.scene.remove(entity);
  }
}

export default Game;
