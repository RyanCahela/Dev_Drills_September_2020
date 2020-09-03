class MouseControls {
  constructor(canvasEl) {
    if (canvasEl.tagName != "CANVAS") {
      throw Error(
        "You must pass in a canvas element to the MouseControls contrusctro"
      );
    }
    this.position = { x: 0, y: 0 };
    this.canvasEl = canvasEl;
    this.pressed = false;
    this.released = false;
    this.isDown = false;
    this.canvasRect = {};
    canvasEl.addEventListener(
      "mousedown",
      (e) => this.handleMousedown(e),
      false
    );
    canvasEl.addEventListener("mouseup", (e) => this.handleMosueup(e), false);
    canvasEl.addEventListener(
      "mousemove",
      (e) => this.handleMousemove(e),
      false
    );

    window.addEventListener(
      "load",
      () => this.getCanvasRect(this.canvasEl),
      false
    );

    window.addEventListener(
      "resize",
      () => this.getCanvasRect(this.canvasEl),
      false
    );
  }

  handleMosueup() {
    this.released = true;
    this.isDown = false;
  }

  handleMousedown() {
    this.pressed = true;
    this.isDown = true;
  }

  handleMousemove(e) {
    this.getMousePositionFromEvent(e);
  }

  getMousePositionFromEvent({ clientX, clientY }) {
    const { position, canvasEl, canvasRect } = this;
    const xRatio = canvasEl.width / canvasEl.clientWidth;
    const yRatio = canvasEl.height / canvasEl.clientHeight;

    position.x = (clientX - canvasRect.left) * xRatio;
    position.y = (clientY - canvasRect.top) * yRatio;
  }

  update() {
    this.pressed = false;
    this.released = false;
  }

  getCanvasRect(canvasEl) {
    console.log("getBoundingClientRect Called");
    this.canvasRect = canvasEl.getBoundingClientRect();
  }
}

export default MouseControls;
