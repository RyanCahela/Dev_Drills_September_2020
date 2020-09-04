class CanvasRenderer {
  constructor(width, height) {
    const canvas = document.createElement("canvas");
    this.height = canvas.height = height;
    this.width = canvas.width = width;
    this.view = canvas;
    this.ctx = canvas.getContext("2d");
    this.ctx.textBaseline = "top";
  }

  render(container) {
    const { ctx, height, width } = this;
    ctx.clearRect(0, 0, width, height);
    renderRecusive(container);

    function renderRecusive(container) {
      container.children.forEach((child) => {
        ctx.save();

        if (child.position) {
          ctx.translate(
            Math.round(child.position.x),
            Math.round(child.position.y)
          );
        }

        if (child.text) {
          const { fill, align, font } = child.styles;

          if (fill) ctx.fillStyle = fill;
          if (align) ctx.textAlign = align;
          if (font) ctx.font = font;
          ctx.fillText(child.text, 0, 0);
        }

        if (child.children) {
          renderRecusive(child);
        }

        ctx.restore();
      });
    }
  }
}

export default CanvasRenderer;
