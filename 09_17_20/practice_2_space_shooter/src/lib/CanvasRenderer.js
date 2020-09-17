const CanvasRenderer = (width, height) => {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const view = canvas;
  const ctx = canvas.getContext("2d");
  ctx.textBaseline = "top";

  const render = (container, clear = true) => {
    if (clear) ctx.clearRect(0, 0, width, height);
    renderRecursive(container);

    function renderRecursive(container) {
      const { nodes: containerNodes } = container.getState();
      containerNodes.forEach((node) => {
        ctx.save();

        const {
          anchor,
          position,
          scale,
          rotation,
          tileWidth,
          tileHeight,
          texture,
          text,
          styles,
          frame,
          nodes,
        } = node.getState();

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

        //leaf nodes
        if (tileWidth && tileHeight && frame && texture) {
          ctx.drawImage(
            texture.image,
            frame.x * tileWidth,
            frame.y * tileHeight,
            tileWidth,
            tileHeight,
            0,
            0,
            tileWidth,
            tileHeight
          );
        } else if (texture) {
          ctx.drawImage(texture.image, 0, 0);
        }

        if (text) {
          console.log("inside text");
          const { fill, align, font } = styles;
          if (fill) ctx.fillStyle = fill;
          if (font) ctx.font = font;
          if (align) ctx.textAlign = align;
          ctx.fillText(text, 0, 0);
        }

        if (nodes) {
          renderRecursive(node);
        }

        ctx.restore();
      });
    }
  };

  return Object.freeze({
    render,
    view,
  });
};

export default CanvasRenderer;
