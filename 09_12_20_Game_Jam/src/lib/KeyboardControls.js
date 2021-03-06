class KeyboardControls {
  constructor() {
    this.keys = {};
    this.keyCodes = {
      leftArrow: 37,
      upArrow: 38,
      rightArrow: 39,
      downArrow: 40,
      aKey: 65,
      dKey: 68,
      wKey: 87,
      sKey: 83,
      spacebar: 32,
    };
    document.addEventListener("keyup", (e) => this.handleKeyup(e), false);
    document.addEventListener("keydown", (e) => this.handleKeydown(e), false);
  }

  handleKeydown(e) {
    const { leftArrow, rightArrow, upArrow, downArrow } = this.keyCodes;
    if ([leftArrow, rightArrow, upArrow, downArrow].includes(e.which)) {
      e.preventDefault();
    }

    this.keys[e.which] = true;
  }

  handleKeyup(e) {
    this.keys[e.which] = false;
  }

  get x() {
    const { leftArrow, rightArrow, aKey, dKey } = this.keyCodes;
    const { keys } = this;

    if (keys[leftArrow] || keys[aKey]) {
      return -1;
    }

    if (keys[rightArrow] || keys[dKey]) {
      return 1;
    }

    return 0;
  }

  get y() {
    const { upArrow, downArrow, wKey, sKey } = this.keyCodes;
    const { keys } = this;

    if (keys[upArrow] || keys[wKey]) {
      return -1;
    }

    if (keys[downArrow] || keys[sKey]) {
      return 1;
    }

    return 0;
  }

  get action() {
    return this.keys[this.keyCodes.spacebar];
  }
}

export default KeyboardControls;
