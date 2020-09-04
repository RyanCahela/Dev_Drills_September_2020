import { KeyboardControls } from "./index";

class Text {
  constructor(text = "", styles = {}) {
    this.position = { x: 0, y: 0 };
    this.controls = new KeyboardControls();
    this.playerSpeed = 500;
    this.text = text;
    this.styles = styles;
  }

  update(dt, t) {
    const { position, controls, playerSpeed } = this;
    position.x += controls.x * playerSpeed * dt;
    position.y += controls.y * playerSpeed * dt;
  }
}

export default Text;
