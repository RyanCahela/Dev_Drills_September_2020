class MouseControls {
  constructor(view) {
    if (view.tagName != "CANVAS") {
      throw Error("MouseControls Constructor requires a canvas element");
    }
    this.position = { x: 0, y: 0 };
    this.pressed = false;
    this.released = false;
    this.isDown = false;
    this.view = view;
    this.rect = this.view.getBoundingClientRect();
    this.view.addEventListener("mouseup", (e) => this.handleMouseup(e), false);
    this.view.addEventListener(
      "mousedown",
      (e) => this.handleMousedown(e),
      false
    );
    this.view.addEventListener(
      "mousemove",
      (e) => this.handleMouseMove(e),
      false
    );
    document.addEventListener(
      "resize",
      (e) => this.calculateViewRectSize(e),
      false
    );
  }

  handleMouseup(e) {
    this.released = false;
    this.isDown = false;
  }

  handleMousedown(e) {
    this.pressed = true;
    this.isDown = true;
  }

  handleMouseMove(e) {
    this.getPositionFromEvent(e);
  }

  getPositionFromEvent({ clientX, clientY }) {
    const { position, view } = this;
    const xRatio = view.width / view.clientWidth;
    const yRatio = view.height / view.clientHeight;
    position.x = (clientX - this.rect.left) * xRatio;
    position.y = (clientY - this.rect.top) * yRatio;
  }

  calculateViewRectSize() {
    this.rect = this.view.getBoundingClientRect();
  }

  update() {
    this.pressed = false;
    this.released = false;
  }
}

export default MouseControls;
