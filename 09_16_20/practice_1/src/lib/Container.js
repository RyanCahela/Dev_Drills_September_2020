const Container = () => {
  const position = { x: 0, y: 0 };
  let nodes = [];

  const add = (node) => {
    nodes.push(node);
    return node;
  };

  const remove = (node) => {
    nodes = nodes.filter((n) => n != node);
    return node;
  };

  const map = (callback) => {
    nodes.map(callback);
  };

  const update = (deltaTime, currentTime) => {
    nodes = nodes.filter((node) => {
      if (node.update) {
        node.update(deltaTime, currentTime);
      }
      return node.isDead ? false : true;
    });
  };

  const getProps = () => {
    return {
      nodes,
      position,
    };
  };

  return Object.freeze({
    getProps,
    add,
    remove,
    map,
    update,
  });
};

export default Container;
