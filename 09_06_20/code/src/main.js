import {
  Container,
  CanvasRenderer,
  Text,
  Sprite,
  Texture,
  KeyboardControls,
} from "./lib/index";

const HEIGHT = 300;
const WIDTH = 640;
const renderer = new CanvasRenderer(WIDTH, HEIGHT);
const scene = new Container();
const keyboardInput = new KeyboardControls();
const textures = {
  background: new Texture("./resources/background.png"),
  spaceship: new Texture("./resources/spaceship.png"),
  bullet: new Texture("./resources/bullet.png"),
  enemy: new Texture("./resources/baddie.png"),
};

let deltaTime = 0;
let timeOfLastFrame = 0;
function init() {
  scene.add(new Sprite(textures.background));
  scene.add(new Sprite(textures.spaceship));
  requestAnimationFrame(loop);
}
function loop(ms) {
  requestAnimationFrame(loop);
  const currentTime = ms / 1000;
  deltaTime = currentTime - timeOfLastFrame;
  timeOfLastFrame = currentTime;

  scene.update(deltaTime, currentTime);
  renderer.render(scene);
}

document.getElementById("board").appendChild(renderer.view);
init();
