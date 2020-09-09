import Text from "./lib/Text";
class Score extends Text {
  constructor(text, styles) {
    super(text, styles);
    this.position = { x: 0, y: 0 };
    this.scoreAmount = 0;
  }

  update(deltaTime, currentTime) {
    this.text = `Score: ${this.scoreAmount}`;
  }

  increaseScore(currentTime) {
    this.scoreAmount += Math.round(currentTime);
  }
}

export default Score;
