class Text {
  constructor({
    text = "",
    styles = {
      fill: undefined,
      align: undefined,
      font: undefined,
    },
  }) {
    this.position = { x: 0, y: 0 };
    this.text = text;
    this.styles = styles;
  }
}

export default Text;
