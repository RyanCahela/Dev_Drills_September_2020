class CanvasRenderer {
  constructor(width, height) {
    const canvas = document.createElement("canvas");
    this.height = canvas.height = height;
    this.width = canvas.width = width;
    this.view = canvas;
    this.ctx = canvas.getContext("2d");
  }

  render(container, clear = true) {
    const { ctx, height, width } = this;
    if (clear) ctx.clearRect(0, 0, width, height);
    renderRecursive(container);

    function renderRecursive(container) {
      container.nodes.forEach((node) => {
        const { position, text, texture, scale, anchor, rotation } = node;
        ctx.save();

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
          const pivotX = node.pivot ? node.pivot.x : 0;
          const pivotY = node.pivot ? node.pivot.y : 0;
          ctx.translate(pivotX, pivotY);
          ctx.rotate(rotation);
          ctx.translate(-pivotX, -pivotY);
        }

        //draw leaf nodes
        if (text) {
        }

        if (texture) {
          ctx.drawImage(texture.image, 0, 0);
        }

        //if container go down the tree
        if (node.nodes) {
          renderRecursive(node);
        }

        ctx.restore();
      });
    }
  }
}

export default CanvasRenderer;
