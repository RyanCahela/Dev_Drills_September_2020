import Container from "./Container";
import CanvasRenderer from "./CanvasRenderer";

const Game = (width, height, parentContainerIdentifier) => {
  const scene = Container();
  const renderer = CanvasRenderer(width, height);
  document.querySelector(parentContainerIdentifier).appendChild(renderer.view);

  let deltaTime = 0;
  let timeOfLastFrame = 0;

  const run = (callback = () => {}) => {
    requestAnimationFrame(loop);
    function loop(ms) {
      requestAnimationFrame(loop);
      const currentTime = ms / 1000; //convert miliseconds to seconds.
      deltaTime = currentTime - timeOfLastFrame;
      timeOfLastFrame = currentTime;

      scene.update(deltaTime, currentTime);
      callback(deltaTime, currentTime);
      renderer.render(scene);
    }
  };

  const add = (node) => {
    return scene.add(node);
  };

  const remove = (node) => {
    return scene.remove(node);
  };

  const map = (callback) => {
    scene.map(callback);
  };

  return Object.freeze({
    renderer,
    run,
    add,
    remove,
    map,
  });
};

export default Game;
