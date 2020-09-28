import Animation from "./Animation";

class AnimationManager {
  constructor() {
    this.animations = {};
    this.currentAnimation = null;
    this.currentFrame;
  }

  add(animationConfig = {}) {
    const { name, frames, rate } = animationConfig;
    this.animations[name] = new Animation({ frames, rate });
  }

  play(name) {
    if (this.currentAnimation === this.animations[name]) return;
    if (!this.animations[name]) {
      console.error(`Animation '${name}' not found in animations cache`);
    }
    this.currentAnimation = this.animations[name];
    this.currentAnimation.reset();
  }

  update(deltaTime, currentTime) {
    if (!this.currentAnimation) return;
    this.currentAnimation.update(deltaTime, currentTime);
    this.currentFrame = this.currentAnimation.currentFrame;
  }
}

export default AnimationManager;
