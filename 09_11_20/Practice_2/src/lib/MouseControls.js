class MouseControls {
  constructor(canvasEl) {
    if (canvasEl.tagName !== "CANVAS") {
      throw Error(
        "You must pass canvas element into Mouse Controls constructor"
      );
    }
    this.position = { x: 0, y: 0 };
    this.pressed = false;
    this.release = false;
    this.isDown = false;
    this.canvas = canvasEl;
    this.rect = this.canvas.getBoundingClientRect();
    this.canvas.addEventListener(
      "mousedown",
      (e) => this.handleMouseDown(e),
      false
    );
    this.canvas.addEventListener(
      "mouseup",
      (e) => this.handleMouseUp(e),
      false
    );
    this.canvas.addEventListener(
      "mousemove",
      (e) => this.handleMouseMove(e),
      false
    );
    window.addEventListener("resize", () => this.handleWindowResize(), false);
  }

  handleMouseDown(e) {
    this.pressed = true;
    this.isDown = true;
  }

  handleMouseMove(e) {
    this.getPositionFromEvent(e);
  }

  getPositionFromEvent({ clientX, clientY }) {
    const { position, canvas } = this;
    const xRatio = canvas.width / canvas.clientWidth;
    const yRatio = canvas.height / canvas.clientHeight;

    position.x = (clientX - this.rect.left) * xRatio;
    position.y = (clientY - this.rect.top) * yRatio;
  }

  handleMouseUp(e) {
    this.release = true;
    this.isDown = false;
  }

  handleWindowResize(e) {
    this.rect = this.canvas.getBoundingClientRect();
  }

  update() {
    this.pressed = false;
    this.release = false;
  }
}

export default MouseControls;
