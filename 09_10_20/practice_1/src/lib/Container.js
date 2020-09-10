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

  map(callback) {
    return this.nodes.map(callback);
  }

  update(deltaTime, currenTime) {
    this.nodes = this.nodes.filter((node) => {
      if (node.update) {
        node.update(deltaTime, currenTime);
      }

      return true;
    });
  }
}

export default Container;
