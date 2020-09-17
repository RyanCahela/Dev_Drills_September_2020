const Animation = (params) => {
  console.log(params);
  const { frames, rate } = params;
  let currentFrameIndex = 0;
  let currentFrame = frames[currentFrameIndex];
  let currentAnimationTime = 0;

  const update = (deltaTime) => {
    if (deltaTime < rate) {
      currentAnimationTime += deltaTime;
    }

    if (currentAnimationTime > rate) {
      currentFrameIndex++;
      currentFrame = frames[currentFrameIndex % frames.length];
      currentAnimationTime -= rate;
    }
  };

  const getState = () => {
    return {
      frame: currentFrame,
    };
  };

  const reset = () => {
    currentFrameIndex = 0;
    currentAnimationTime = 0;
  };

  return Object.freeze({
    update,
    getState,
    reset,
  });
};

export default Animation;
