class MouseControls {
  constructor(canvasEl) {
    if (canvasEl.tagName != "CANVAS") {
      throw Error(
        "You must pass in a canvas element to the MouseControls contrusctro"
      );
    }
  }
}

export default MouseControls;
