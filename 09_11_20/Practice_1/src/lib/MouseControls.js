class MouseControls {
  constructor(canvasEl) {
    if (canvasEl.tagName !== "CANVAS") {
      throw Error(
        "You must pass canvas element into Mouse Controls constructor"
      );
    }
    this.pressed = false;
    this.release = false;
    this.isDown = false;
    this.canvas = canvasEl;
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
}
