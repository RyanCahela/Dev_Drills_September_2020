import CanvasRenderer from "./CanvasRenderer";
import Container from "./Container";

class Game {
  constructor(width, height, parentElementIdentifier) {
    this.renderer = new CanvasRenderer(width, height);
    this.scene = new Container();
    this.deltaTime = 0;
    this.timeOfLastFrame = 0;
    document
      .querySelector(parentElementIdentifier)
      .appendChild(this.renderer.view);
  }

  add(node) {
    return this.scene.add(node);
  }

  map(callback) {
    this.scene.map(callback);
  }

  run(callback = () => {}) {
    const loop = (ms) => {
      requestAnimationFrame(loop);
      const currentTime = ms / 1000;
      this.deltaTime = currentTime - this.timeOfLastFrame;
      this.timeOfLastFrame = currentTime;

      //cant write to destuctured values
      //(that's why this is here not at the top of func)
      const { deltaTime, scene, renderer } = this;
      scene.update(deltaTime, currentTime);
      callback(deltaTime, currentTime);
      renderer.render(scene);
    };

    requestAnimationFrame(loop);
  }
}

export default Game;
