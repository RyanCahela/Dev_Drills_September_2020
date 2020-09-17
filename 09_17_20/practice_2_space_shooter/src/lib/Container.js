const Container = () => {
  const position = { x: 0, y: 0 };
  let nodes = [];

  const getState = () => {
    return {
      nodes,
      position,
    };
  };

  const setState = (newState) => {
    if (newState.position.x) position.x = newState.position.x;
    if (newState.position.y) position.y = newState.position.y;
  };

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

      const { isDead } = node.getState();
      return isDead ? false : true;
    });
  };

  return Object.freeze({
    getState,
    setState,
    add,
    remove,
    map,
    update,
  });
};

export default Container;
