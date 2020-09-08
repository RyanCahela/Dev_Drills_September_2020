import { Container, CanvasRenderer, Sprite } from "./lib/index";

import Spaceship from "./Spaceship";
import BulletContainer from "./BulletContainer";
import textures from "./Textures";

const WIDTH = 640;
const HEIGHT = 300;
const renderer = new CanvasRenderer(WIDTH, HEIGHT);
const scene = new Container();
const bulletContainer = new BulletContainer();

let deltaTime = 0;
let timeOfLastFrame = 0;

//Spaceship
const spaceship = new Spaceship(WIDTH, HEIGHT, bulletContainer);

function init() {
  scene.add(new Sprite(textures.background));
  scene.add(spaceship);
  scene.add(bulletContainer);

  document.getElementById("board").appendChild(renderer.view);
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

init();
