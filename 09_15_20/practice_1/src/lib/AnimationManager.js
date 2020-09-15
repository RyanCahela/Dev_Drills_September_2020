import Animation from "./Animation";

const AnimationManager = () => {
  const animations = {};
  let currentFrameObj = null;
  let currentAnimation = null;

  const add = (name, frames, rate) => {
    animations[name] = Animation(frames, rate);
  };

  const play = (name) => {
    const animation = animations[name];
    if (currentAnimation === animation) return;
    currentAnimation = animation;
  };

  const update = (deltaTime, currentTime) => {
    if (!currentAnimation) return;
    currentAnimation.update(deltaTime, currentTime);
    currentFrameObj = currentAnimation.frame;
  };

  return Object.freeze({
    add,
    play,
    update,
    get frame() {
      return currentFrameObj;
    },
  });
};

export default AnimationManager;
