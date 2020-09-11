class CanvasRenderer {
  constructor(width, height) {
    const canvas = document.createElement("canvas");
    this.width = canvas.width = width;
    this.height = canvas.height = height;
    this.view = canvas;
    this.ctx = canvas.getContext("2d");
  }

  render(container, clear = true) {
    const { ctx, width, height } = this;

    if (clear) ctx.clearRect(0, 0, width, height);
    renderRecursive(container);

    function renderRecursive(container) {
      container.nodes.forEach((node) => {
        ctx.save();

        const { position, anchor, scale, rotation, pivot } = node;

        if (position) {
          ctx.translate(Math.round(position.x), Math.round(position.y));
        }

        if (anchor) {
          ctx.translate(anchor.x, anchor.y);
        }

        if (scale) {
          ctx.scale(scale.x, scale.y);
        }

        if (rotation) {
          const pivotX = pivot.x ? pivot.x : 0;
          const pivotY = pivot.y ? pivot.y : 0;
          ctx.translate(pivotX, pivotY);
          ctx.rotate(rotation);
          ctx.translate(-pivotX, -pivotY);
        }

        //draw leaf nodes
        if (node.tileWidth) {
          ctx.drawImage(
            node.texture.image,
            node.frame.x * node.tileWidth,
            node.frame.y * node.tileHeight,
            node.tileWidth,
            node.tileHeight,
            0,
            0,
            node.tileWidth,
            node.tileHeight
          );
        } else if (node.texture) {
          ctx.drawImage(node.texture.image, 0, 0);
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
