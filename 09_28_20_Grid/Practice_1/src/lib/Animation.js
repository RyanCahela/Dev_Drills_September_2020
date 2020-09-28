class Animation {
  constructor(config = {}) {
    const { frames = [], rate = 0.5 } = config;
    this.frames = frames;
    this.rate = rate;
    this.currentFrameIndex = 0;
    this.currentFrame = this.frames[this.currentFrameIndex];
    this.currentAnimationTime = 0;
  }

  reset() {
    this.currentAnimationTime = 0;
    this.currentFrameIndex = 0;
    this.currentFrame = frames[this.currentFrameIndex];
  }

  update(deltaTime, currentTime) {
    if (deltaTime < this.rate) {
      this.currentAnimationTime += deltaTime;
    }

    if (this.currentAnimationTime > this.rate) {
      const { frames } = this;
      this.currentFrameIndex++;
      this.currentFrame = frames[this.currentFrameIndex % frames.length];
      this.currentAnimationTime -= this.rate;
    }
  }
}

export default Animation;
