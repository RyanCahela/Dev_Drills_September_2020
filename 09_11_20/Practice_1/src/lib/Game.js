import Container from "./Container";
import CanvasRenderer from "./CanvasRenderer";

class Game {
  constructor(width, height, parentElementIdentifier) {
    this.renderer = new CanvasRenderer(width, height);
    this.scene = new Container();
    this.delaTime = 0;
    this.timeOfLastFrame = 0;
    document
      .querySelector(parentElementIdentifier)
      .appendChild(this.renderer.view);
  }

  map(callback) {
    this.scene.map(callback);
  }

  add(node) {
    return this.scene.add(node);
  }

  run(callback = () => {}) {
    const loop = (ms) => {
      requestAnimationFrame(loop);
      const currentTime = ms / 1000;
      this.delaTime = currentTime - this.timeOfLastFrame;
      this.timeOfLastFrame = currentTime;

      this.scene.update(this.delaTime, currentTime);
      callback(this.delaTime, currentTime);
      this.renderer.render(this.scene);
    };
    requestAnimationFrame(loop);
  }
}

export default Game;
