const Animation = (frames, rate) => {
  let currentAnimationTime = 0;
  let currentFrame = 0;
  let frame = frames[currentFrame];

  const update = (deltaTime) => {
    if (deltaTime < rate) {
      currentAnimationTime += deltaTime;
    }

    if (currentAnimationTime > rate) {
      currentFrame++;
      frame = frames[currentFrame % frames.length];
      currentAnimationTime -= rate;
    }
  };

  return Object.freeze({
    update,
    get frame() {
      return frame;
    },
  });
};

export default Animation;
