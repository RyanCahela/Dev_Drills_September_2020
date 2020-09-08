import { Container, CanvasRenderer, Sprite } from "./lib/index";

import Spaceship from "./Spaceship";
import BulletContainer from "./BulletContainer";
import EnemyContainer from "./EnemyContainer";
import textures from "./Textures";

const WIDTH = 640;
const HEIGHT = 300;
const renderer = new CanvasRenderer(WIDTH, HEIGHT);
const scene = new Container();
const bulletContainer = new BulletContainer();
const enemyContainer = new EnemyContainer(WIDTH);

let deltaTime = 0;
let timeOfLastFrame = 0;
let spawnRate = 1.0;
let timeOfLastEnemySpawn = 0;

//Spaceship
const spaceship = new Spaceship(WIDTH, HEIGHT, bulletContainer);

function init() {
  scene.add(new Sprite(textures.background));
  scene.add(spaceship);
  scene.add(bulletContainer);
  scene.add(enemyContainer);

  document.getElementById("board").appendChild(renderer.view);
  requestAnimationFrame(loop);
}

function loop(ms) {
  requestAnimationFrame(loop);
  const currentTime = ms / 1000;
  deltaTime = currentTime - timeOfLastFrame;
  timeOfLastFrame = currentTime;

  //spawn Enemys
  if (currentTime - timeOfLastEnemySpawn > spawnRate) {
    timeOfLastEnemySpawn = currentTime;
    enemyContainer.spawnEnemy(WIDTH + 32, Math.random() * HEIGHT, 200, 0);
    console.log("enemyContainer", enemyContainer);
    console.log("enemySpawned");
  }

  scene.update(deltaTime, currentTime);
  renderer.render(scene);
}

init();
