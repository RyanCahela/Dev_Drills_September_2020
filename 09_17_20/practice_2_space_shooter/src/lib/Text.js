const Text = (params) => {
  let currentText = params.text ? params.text : "";
  let currentStyles = params.styles ? params.styles : {};
  let currentPosition = {
    x: params.position.x ? params.position.x : 0,
    y: params.position.y ? params.position.y : 0,
  };

  const getState = () => {
    return {
      text: currentText,
      styles: currentStyles,
      position: currentPosition,
    };
  };

  const setState = ({ text, styles, position }) => {
    currentText = text ? text : currentText;
    if (styles) {
      const { font, align, fill } = styles;
      if (font) currentStyles.font = font;
      if (align) currentStyles.align = align;
      if (fill) currentStyles.fill = fill;
    }

    if (position) {
      if (position.x !== undefined) currentPosition.x = position.x;
      if (position.y !== undefined) currentPosition.y = position.y;
    }
  };

  return Object.freeze({
    getState,
    setState,
  });
};

export default Text;
