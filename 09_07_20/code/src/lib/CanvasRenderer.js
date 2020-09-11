class CanvasRenderer {
  constructor(width, height) {
    const canvas = document.createElement("canvas");
    this.width = canvas.width = width;
    this.height = canvas.height = height;
    this.view = canvas;
    this.ctx = canvas.getContext("2d");
    this.ctx.textBaseline = "top";
  }

  render(container, clear = true) {
    const { ctx, width, height } = this;
    if (clear) {
      ctx.clearRect(0, 0, width, height);
    }

    renderRecursive(container);

    function renderRecursive(container) {
      container.children.forEach((child) => {
        if (child.isDead) return;
        ctx.save();

        if (child.position) {
          ctx.translate(
            Math.round(child.position.x),
            Math.round(child.position.y)
          );
        }

        //render leaf nodes
        if (child.text) {
          const { fill, font, align } = child.styles;
          if (fill) ctx.fillStyle = fill;
          if (font) ctx.font = font;
          if (align) ctx.textAlign = align;
          ctx.fillText(child.text, 0, 0);
        }

        if (child.texture) {
          ctx.drawImage(child.texture.image, 0, 0);
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
