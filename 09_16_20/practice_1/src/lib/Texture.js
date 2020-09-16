const Texture = (params) => {
  const { textureUrl } = params;
  if (!textureUrl) console.error(`textureUrl is ${textureUrl}`);

  const image = document.createElement("img");
  image.src = textureUrl;

  return Object.freeze({
    image,
  });
};

export default Texture;
