const KeyboardControls = () => {
  const keys = {};
  const keyCodes = {
    leftArrow: 37,
    upArrow: 38,
    rightArrow: 39,
    downArrow: 40,
    aKey: 65,
    wKey: 87,
    dKey: 68,
    sKey: 83,
  };

  document.addEventListener("keyup", handleKeyUp, false);
  document.addEventListener("keydown", handleKeyDown, false);

  function handleKeyDown(e) {
    const { upArrow, downArrow, leftArrow, rightArrow } = keyCodes;
    if ([upArrow, downArrow, leftArrow, rightArrow].includes(e.which)) {
      e.preventDefault();
    }
    keys[e.which] = true;
  }

  function handleKeyUp(e) {
    keys[e.which] = false;
  }

  function getState() {
    const {
      leftArrow,
      upArrow,
      downArrow,
      rightArrow,
      aKey,
      wKey,
      dKey,
      sKey,
    } = keyCodes;
    const currentVectors = { x: 0, y: 0 };
    if (keys[leftArrow] || keys[aKey]) {
      currentVectors.x = -1;
    }

    if (keys[rightArrow] || keys[dKey]) {
      currentVectors.x = 1;
    }

    if (keys[upArrow] || keys[wKey]) {
      currentVectors.y = -1;
    }

    if (keys[downArrow] || keys[sKey]) {
      currentVectors.y = 1;
    }

    return {
      x: currentVectors.x,
      y: currentVectors.y,
    };
  }

  return Object.freeze({
    getState,
  });
};

export default KeyboardControls;
