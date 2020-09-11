class MouseControls {
  constructor(canvasEl) {
    if (canvasEl.tagName !== "CANVAS") {
      throw Error("MouseControls constructor must be passed a canvas element");
    }
    this.position = { x: 0, y: 0 };
    this.canvas = canvasEl;
    this.pressed = false;
    this.isDown = false;
    this.released = false;
    this.rect = this.canvas.getBoundingClientRect();
    canvasEl.addEventListener(
      "mousedown",
      (e) => this.handleMouseDown(e),
      false
    );
    canvasEl.addEventListener("mouseup", (e) => this.handleMouseUp(e), false);
    canvasEl.addEventListener(
      "mousemove",
      (e) => this.handleMouseMove(e),
      false
    );
    window.addEventListener("resize", (e) => this.getNewBoundingRect(e), false);
  }

  handleMouseDown(e) {
    this.pressed = true;
    this.isDown = true;
  }

  handleMouseUp(e) {
    this.released = true;
    this.isDown = false;
  }

  handleMouseMove(e) {
    this.getMousePositionFromEvent(e);
  }

  getMousePositionFromEvent({ clientX, clientY }) {
    const { position, canvas } = this;
    const xRatio = canvas.width / canvas.clientWidth;
    const yRatio = canvas.height / canvas.clientHeight;
    position.x = (clientX - this.rect.left) * xRatio;
    position.y = (clientY - this.rect.top) * yRatio;
  }

  getNewBoundingRect() {
    this.rect = this.canvas.getBoundingClientRect();
  }

  update() {
    this.released = false;
    this.pressed = false;
  }
}

export default MouseControls;
