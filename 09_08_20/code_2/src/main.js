import { Container, CanvasRenderer, Sprite, Text } from "./lib/index";

import Spaceship from "./Spaceship";
import BulletContainer from "./BulletContainer";
import EnemyContainer from "./EnemyContainer";
import textures from "./Textures";
import Score from "./Score";

const WIDTH = 640;
const HEIGHT = 300;
const renderer = new CanvasRenderer(WIDTH, HEIGHT);
const scene = new Container();
const bulletContainer = new BulletContainer();
const enemyContainer = new EnemyContainer(WIDTH);
const scoreKeeper = new Score("Score: ", {
  fill: "darkviolet",
  font: "20pt monospace",
});
scoreKeeper.position.x = WIDTH / 2;
scoreKeeper.position.y = HEIGHT - 120;
const gameOverText = new Text("GAME OVER", {
  fill: "red",
  font: "30pt monospace",
  align: "center",
});
gameOverText.position.x = WIDTH / 2;
gameOverText.position.y = HEIGHT / 2;
gameOverText.isHidden = true;

let deltaTime = 0;
let timeOfLastFrame = 0;
let spawnRate = 1.0;
let timeOfLastEnemySpawn = 0;
let isGameOver = false;

//Spaceship
const spaceship = new Spaceship(WIDTH, HEIGHT, bulletContainer);

function init() {
  scene.add(new Sprite(textures.background));
  scene.add(spaceship);
  scene.add(bulletContainer);
  scene.add(enemyContainer);
  scene.add(scoreKeeper);
  scene.add(gameOverText);

  document.getElementById("board").appendChild(renderer.view);
  requestAnimationFrame(loop);
}

function loop(ms) {
  requestAnimationFrame(loop);
  const currentTime = ms / 1000;
  deltaTime = currentTime - timeOfLastFrame;
  timeOfLastFrame = currentTime;

  if (isGameOver) {
    gameOverText.isHidden = false;
    return;
  }

  //spawn Enemys
  if (currentTime - timeOfLastEnemySpawn > spawnRate) {
    timeOfLastEnemySpawn = currentTime;
    enemyContainer.spawnEnemy(WIDTH + 32, Math.random() * HEIGHT, 200, -32);
    console.log("enemyContainer", enemyContainer);
    console.log("enemySpawned");
  }

  //check for collisions
  enemyContainer.nodes.forEach((enemy) => {
    if (enemy.position.x < 0) {
      console.log("gameOver");
      doGameOver();
    }
    bulletContainer.nodes.forEach((bullet) => {
      const deltaX = bullet.x - enemy.x;
      const deltaY = bullet.y - enemy.y;
      const hypotenuse = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const sumOfEntityRadiuses = 8 + 16;

      if (hypotenuse < sumOfEntityRadiuses) {
        scoreKeeper.increaseScore(currentTime);
        bullet.isDead = true;
        enemy.isDead = true;
      }
    });
  });

  scene.update(deltaTime, currentTime);
  renderer.render(scene);
}

function doGameOver() {
  gameOverText.isHidden = false;
  isGameOver = true;
}

init();
