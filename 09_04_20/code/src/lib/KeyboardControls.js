class KeyboarControls {
  constructor() {
    this.keys = {};
    const KEYCODES = {
      leftArrow: 37,
      upArrow: 38,
      rightArrow: 39,
      downArrow: 40,
      aKey: 65,
      wKey: 87,
      dKey: 68,
      sKey: 83,
    };
    this.KEYCODES = KEYCODES;
    document.addEventListener("keydown", (e) => this.handleKeydown(e), false);
    document.addEventListener("keyup", (e) => this.handleKeyup(e), false);
  }

  handleKeydown(e) {
    const { leftArrow, rightArrow, upArrow, downArrow } = this.KEYCODES;
    if ([leftArrow, rightArrow, upArrow, downArrow].includes(e.which)) {
      e.preventDefault();
    }

    this.keys[e.which] = true;
  }

  handleKeyup(e) {
    this.keys[e.which] = false;
  }

  get x() {
    const { leftArrow, rightArrow, aKey, dKey } = this.KEYCODES;
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
    const { upArrow, downArrow, wKey, sKey } = this.KEYCODES;
    const { keys } = this;
    if (keys[upArrow] || keys[wKey]) {
      return -1;
    }

    if (keys[downArrow] || keys[sKey]) {
      return 1;
    }

    return 0;
  }
}

export default KeyboarControls;
