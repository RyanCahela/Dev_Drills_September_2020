const Animation = (
  configObj = {
    frames: [],
    rate: 0.5,
  }
) => {
  const frames = configObj.frames;
  const rate = configObj.rate;
  let currentAnimationTime = 0;
  let currentFrameIndex = 0;
  let currentFrame = frames[currentFrameIndex];

  const update = (deltaTime, currentTime) => {
    if (deltaTime > rate) return;

    currentAnimationTime += deltaTime;
    if (currentAnimationTime > rate) {
      currentFrameIndex++;
      currentFrame = frames[currentFrameIndex % frames.length];
      currentAnimationTime -= rate;
    }
  };

  const getCurrentFrame = () => currentFrame;

  return Object.freeze({
    update,
    getCurrentFrame,
  });
};

export default Animation;
