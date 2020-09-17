import Container from "./Container";
import CanvasRenderer from "./CanvasRenderer";

const Game = (width, height, parentElementIdentifier) => {
  const scene = Container();
  const renderer = CanvasRenderer(width, height);
  document.querySelector(parentElementIdentifier).appendChild(renderer.view);
  let deltaTime = 0;
  let timeOfLastFrame = 0;

  const run = (callback = () => {}) => {
    requestAnimationFrame(loop);
    function loop(ms) {
      requestAnimationFrame(loop);
      const currentTime = ms / 1000;
      deltaTime = currentTime - timeOfLastFrame;
      timeOfLastFrame = currentTime;

      scene.update(deltaTime, currentTime);
      callback(deltaTime, currentTime);
      renderer.render(scene);
    }
  };

  const map = (callback) => scene.map(callback);

  const add = (node) => scene.add(node);

  return Object.freeze({
    run,
    map,
    add,
    renderer,
  });
};

export default Game;
