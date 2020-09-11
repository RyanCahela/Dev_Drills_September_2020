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
    console.log("removing", child);
    console.log("before", this.children);
    this.children = this.children.filter((c) => c != child);
    console.log("after", this.children);
  }

  update(dt, t) {
    this.children = this.children.filter((child) => {
      if (child.update) {
        child.update(dt, t);
      }

      return child.isDead ? false : true;
    });
  }
}

export default Container;
