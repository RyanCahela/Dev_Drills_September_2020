const CanvasRenderer = (width, height) => {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const view = canvas;
  const ctx = canvas.getContext("2d");

  const render = (container, clear = true) => {
    if (clear) ctx.clearRect(0, 0, width, height);
    renderRecursive(container);

    function renderRecursive(container) {
      container.nodes.forEach((node) => {
        ctx.save();
        const {
          position,
          anchor,
          scale,
          rotation,
          pivot,
          tileWidth,
          tileHeight,
          texture,
          text,
          frame,
        } = node.getProps();

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

        //if TileSprite
        if (tileWidth && tileHeight && frame) {
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

        //if Text
        if (text) {
          const { fill, font, align } = node.styles;
          if (fill) ctx.fillStyle = fill;
          if (align) ctx.textAlign = align;
          if (font) ctx.font = font;
          ctx.fillText(text, 0, 0);
        }

        //if Container
        if (node.nodes) {
          renderRecursive(node);
        }

        ctx.restore();
      });
    }
  };

  return Object.freeze({
    view,
    render,
  });
};

export default CanvasRenderer;
