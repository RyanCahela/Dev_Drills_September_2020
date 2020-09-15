const Texture = (url) => {
  const image = document.createElement("img");
  image.src = url;

  return Object.freeze({
    image,
  });
};

export default Texture;
