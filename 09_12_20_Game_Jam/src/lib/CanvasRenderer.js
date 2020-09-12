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
    if (clear) ctx.clearRect(0, 0, width, height);

    renderRecursive(container);

    function renderRecursive(container) {
      container.nodes.forEach((node) => {
        ctx.save();

        const { position, texture } = node;

        if (position) {
          ctx.translate(Math.round(position.x), Math.round(position.y));
        }

        if (texture) {
          ctx.drawImage(texture.image, 0, 0);
        }

        if (node.nodes) {
          renderRecursive(node);
        }

        ctx.restore();
      });
    }
  }
}

export default CanvasRenderer;
