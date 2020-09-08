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

  update(deltaTime, currentTime) {
    this.children = this.children.filter((child) => {
      if (child.update) {
        child.update(deltaTime, currentTime);
      }
      return child.isDead ? false : true;
    });
  }
}

export default Container;
