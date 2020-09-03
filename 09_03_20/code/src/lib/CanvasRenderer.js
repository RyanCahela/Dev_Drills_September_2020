class CanvasRenderer {
  constructor(width, height) {
    const canvas = document.createElement("canvas");
    canvas.height = height;
    canvas.width = width;
    this.width = width;
    this.height = height;
    this.view = canvas;
    this.ctx = canvas.getContext("2d");
    this.ctx.textBaseline = "top";
  }

  render(container) {
    const { ctx, height, width } = this;
    ctx.clearRect(0, 0, width, height);

    renderRecursive(container);
    function renderRecursive(container) {
      container.children.forEach((child) => {
        ctx.save();

        ctx.translate(
          Math.round(child.position.x),
          Math.round(child.position.y)
        );

        if (child.text) {
          const { fill, font, align } = child.styles;
          if (fill) ctx.fillStyle = fill;
          if (font) ctx.font = font;
          if (align) ctx.textAlign = align;
          ctx.fillText(child.text, 0, 0);
        }

        if (child.children) {
          renderRecursive(child);
        }

        ctx.restore();
      });
    }
  }
}

export default CanvasRenderer;
