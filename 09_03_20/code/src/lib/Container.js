class Container {
  constructor() {
    this.position = { x: 0, y: 0 };
    this.children = [];
  }

  add(child) {
    this.children.push(child);
    return child;
  }

  remove(child) {
    this.children = this.children.filter((c) => c != child);
    return child;
  }

  update(dt, t) {
    this.children.forEach((child) => {
      if (child.children) {
        child.update(dt, t);
      }
    });
  }
}

export default Container;
