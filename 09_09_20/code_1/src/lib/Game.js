import Container from "./Container";
import CanvasRenderer from "./CanvasRenderer";

class Game {
  constructor(width, height, parentContainer) {
    this.renderer = new CanvasRenderer(width, height);
    document.querySelector(parentContainer).appendChild(this.renderer.view);
    this.scene = new Container();
  }

  run(gameLoop = () => {}) {
    const STEP = 1 / 60;
    const MAX_FRAME = STEP * 5;
    let deltaTime = 0;
    let timeOfLastFrame = 0;

    const loop = (ms) => {
      const currentTime = ms / 1000;
      deltaTime = Math.min(currentTime - timeOfLastFrame, MAX_FRAME);
      timeOfLastFrame = currentTime;
      requestAnimationFrame(loop);

      this.scene.update(deltaTime, currentTime);
      gameLoop(deltaTime, currentTime);
      this.renderer.render(this.scene);
    };

    requestAnimationFrame(loop);
  }

  add(node) {
    return this.scene.add(node);
  }
}

export default Game;
