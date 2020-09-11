class Texture {
  constructor(url) {
    this.image = document.createElement("img");
    this.image.src = url;
  }
}

export default Texture;
