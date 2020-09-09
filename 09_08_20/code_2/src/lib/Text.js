class Text {
  constructor(text = "", styles = {}) {
    this.position = { x: 0, y: 0 };
    this.text = text;
    this.styles = styles;
    this.isHidden = false;
  }
}

export default Text;
