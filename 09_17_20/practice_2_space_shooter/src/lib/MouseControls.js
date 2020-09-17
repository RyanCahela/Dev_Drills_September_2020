const MouseControls = (canvasEl) => {
  if (canvasEl.tagName !== "CANVAS") {
    throw Error(
      "You must pass in a canvas element into MouseControls constructor"
    );
  }
  const position = { x: 0, y: 0 };
  let pressed = false;
  let released = false;
  let isDown = false;
  let rect = canvasEl.getBoundingClientRect();

  document.addEventListener("mouseup", handleMouseUp, false);
  document.addEventListener("mousedown", handleMouseDown, false);
  document.addEventListener("mousemove", handleMouseMove, false);
  window.addEventListener("resize", handleWindowResize, false);

  function handleMouseUp(e) {
    released = true;
    isDown = false;
  }

  function handleMouseDown(e) {
    pressed = true;
    isDown = true;
  }

  function handleMouseMove(e) {
    setMousePositionFromEvent(e);
  }

  function setMousePositionFromEvent({ clientX, clientY }) {
    const xRatio = canvasEl.width / canvasEl.clientWidth;
    const yRatio = canvasEl.height / canvasEl.clientHeight;
    position.x = (clientX - rect.left) * xRatio;
    position.y = (clientY - rect.top) * yRatio;
  }

  function handleWindowResize(e) {
    rect = canvasEl.getBoundingClientRect();
  }

  function update(e) {
    pressed = false;
    released = false;
  }

  function getState() {
    return {
      position,
      isDown,
      pressed,
      released,
    };
  }

  return Object.freeze({
    update,
    getState,
  });
};

export default MouseControls;
