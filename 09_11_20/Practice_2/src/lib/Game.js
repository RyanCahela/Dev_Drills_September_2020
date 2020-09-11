import CanvasRenderer from "./CanvasRenderer";
import Container from "./Container";

class Game {
  constructor(width, height, parentContainerIdentifier) {
    this.renderer = new CanvasRenderer(width, height);
    this.scene = new Container();
    document
      .querySelector(parentContainerIdentifier)
      .appendChild(this.renderer.view);
    this.deltaTime = 0;
    this.timeOfLastFrame = 0;
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
      const currentTime = ms / 1000; //convert miliseconds to seconds
      this.deltaTime = currentTime - this.timeOfLastFrame;
      this.timeOfLastFrame = currentTime;

      this.scene.update(this.deltaTime, currentTime);
      callback(this.deltaTime, currentTime);
      this.renderer.render(this.scene);
    };
    requestAnimationFrame(loop);
  }
}

export default Game;
