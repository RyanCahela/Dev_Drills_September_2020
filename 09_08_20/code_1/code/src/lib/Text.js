class Text {
  constructor(text = "", styles = {}) {
    this.position = { x: 0, y: 0 };
    this.text = text;
    this.styles = styles;
    /*
    styles = {
      fill: "blue",
      align: "center"
      font: "20pt monospace"
    }
    */
  }
}

export default Text;
