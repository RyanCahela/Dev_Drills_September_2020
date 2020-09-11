class Sprite {
  constructor(texture) {
    this.position = { x: 0, y: 0 };
    this.anchor = { x: 0, y: 0 };
    this.scale = { x: 1, y: 1 };
    this.pivot = { x: 0, y: 0 };
    this.rotation = 0;
    this.texture = texture;
  }
}

export default Sprite;
