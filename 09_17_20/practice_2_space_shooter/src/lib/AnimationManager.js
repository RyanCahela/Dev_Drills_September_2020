import Animation from "./Animation";

const AnimationManager = () => {
  const animations = {};
  let currentAnimation = null;

  const add = (params) => {
    const { name, frames, rate } = params;
    if (!name || !frames || !rate) {
      throw Error(
        "AnimationManager.add needs a 'name', 'frames', and 'rate' in the params object."
      );
    }
    animations[name] = Animation({ frames, rate });
  };

  const play = (params) => {
    const { name } = params;
    if (currentAnimation === animations[name]) return;
    currentAnimation = animations[name];
    currentAnimation.reset();
  };

  const update = (deltaTime) => {
    if (currentAnimation === null) return;
    currentAnimation.update(deltaTime);
  };

  const getState = () => {
    const { frame } = currentAnimation.getState();
    return {
      frame,
    };
  };

  return Object.freeze({
    add,
    play,
    getState,
    update,
  });
};

export default AnimationManager;
