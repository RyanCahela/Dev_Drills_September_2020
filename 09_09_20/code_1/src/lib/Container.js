class Container {
  constructor() {
    this.position = { x: 0, y: 0 };
    this.nodes = [];
  }

  add(node) {
    this.nodes.push(node);
    return node;
  }

  remove(node) {
    this.nodes = this.nodes.filter((n) => n != node);
    return node;
  }

  map(callBack) {
    return this.nodes.map(callBack);
  }

  update(deltaTime, currentTime) {
    this.nodes = this.nodes.filter((node) => {
      if (node.update) {
        node.update(deltaTime, currentTime);
      }
      return true;
    });
  }
}

export default Container;
