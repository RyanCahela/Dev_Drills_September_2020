import Animation from "./Animation";

const AnimationManager = () => {
  const animations = {};
  let currentAnimation = null;

  const add = (name, frames, rate) => {
    animations[name] = Animation({
      frames,
      rate,
    });
  };

  const play = (name) => {
    if (currentAnimation === animations[name]) return;
    currentAnimation = animations[name];
  };

  const update = (deltaTime) => {
    if (!currentAnimation) return;
    currentAnimation.update(deltaTime);
  };

  const getCurrentFrame = () => currentAnimation.getCurrentFrame();

  return Object.freeze({
    add,
    play,
    update,
    getCurrentFrame,
  });
};

export default AnimationManager;
