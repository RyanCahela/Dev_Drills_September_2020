import {
  Container,
  Text,
  CanvasRenderer,
  Texture,
  Sprite,
  KeyboardControls,
} from "./lib/index";

const WIDTH = 640;
const HEIGHT = 300;
const FIRE_RATE = 0.5;
const scene = new Container();
const renderer = new CanvasRenderer(WIDTH, HEIGHT);
const keyboardInput = new KeyboardControls();
const textures = {
  background: new Texture("./resources/background.png"),
  bullet: new Texture("./resources/bullet.png"),
  spaceship: new Texture("./resources/spaceship.png"),
  enemy: new Texture("./resources/baddie.png"),
};
const gameOverMessage = new Text("GAME OVER", {
  fill: "red",
  align: "center",
  font: "30pt monospace",
});
gameOverMessage.position.x = WIDTH / 2;
gameOverMessage.position.y = HEIGHT / 2;

const score = new Text("Score: ", {
  fill: "darkviolet",
  align: "center",
  font: "20pt monospace",
});
score.position.x = WIDTH / 2;
score.position.y = HEIGHT - 30;
score.update = function (deltaTime, currentTime) {
  this.text = `Score: ${scoreAmount}`;
};

const enemyContainer = new Container();
const bulletContainer = new Container();
let deltaTime = 0;
let timeOfLastFrame = 0;
let timeOfLastBulletSpawn = 0;
let timeOfLastEnemySpawn = 0;
let spawnRate = 1.0;
let scoreAmount = 0;
let isGameOver = false;

const spaceship = new Sprite(textures.spaceship);
spaceship.update = function (deltaTime, currentTime) {
  const speed = 500;
  this.position.x += keyboardInput.x * speed * deltaTime;
  this.position.y += keyboardInput.y * speed * deltaTime;

  if (this.position.x > WIDTH - 32) this.position.x = WIDTH - 32;
  if (this.position.x < 0) this.position.x = 0;
  if (this.position.y > HEIGHT - 32) this.position.y = HEIGHT - 32;
  if (this.position.y < 0) this.position.y = 0;

  //fire bullet
  if (keyboardInput.action) {
    if (currentTime - timeOfLastBulletSpawn > FIRE_RATE) {
      timeOfLastBulletSpawn = currentTime;
      spawnBullet(this.position.x, this.position.y);
    }
  }
};

function spawnBullet(spawnPosX, spawnPosY) {
  const bullet = new Sprite(textures.bullet);
  bullet.position.x = spawnPosX;
  bullet.position.y = spawnPosY;

  bullet.update = function (deltaTime, currentTime) {
    const speed = 400;
    this.position.x += speed * deltaTime;
    if (this.position.x > WIDTH + 32) {
      this.isDead = true;
      console.log("dead bullet");
    }
  };

  bulletContainer.add(bullet);
}

function spawnEnemy(spawnX, spawnY) {
  const enemy = new Sprite(textures.enemy);
  const speed = -50 - Math.random() * Math.random() * 100;
  enemy.position.x = spawnX;
  enemy.position.y = spawnY;

  enemy.update = function (deltaTime, currentTime) {
    this.position.x += speed * deltaTime;
    if (this.position.x < 0) {
      isGameOver = true;
      console.log();
    }
  };

  enemyContainer.add(enemy);
}

function init() {
  scene.add(new Sprite(textures.background));
  scene.add(spaceship);
  scene.add(enemyContainer);
  scene.add(bulletContainer);
  scene.add(score);

  document.getElementById("board").appendChild(renderer.view);
  requestAnimationFrame(loop);
}

function loop(ms) {
  console.log(isGameOver);
  if (isGameOver) {
    scene.add(gameOverMessage);
    scene.update(deltaTime, currentTime);
    renderer.render(scene);
    return;
  }
  requestAnimationFrame(loop);
  const currentTime = ms / 1000;
  deltaTime = currentTime - timeOfLastFrame;
  timeOfLastFrame = currentTime;

  //spawn bad guys
  if (currentTime - timeOfLastEnemySpawn > spawnRate) {
    timeOfLastEnemySpawn = currentTime;
    const positionY = Math.random() * (HEIGHT - 24);
    spawnEnemy(WIDTH, positionY);
  }

  //increase spawn rate
  spawnRate > 0.5 ? 0.6 : spawnRate * 0.97 + 0.001;

  //collision detection
  enemyContainer.children.forEach((enemy) => {
    bulletContainer.children.forEach((bullet) => {
      const deltaX = enemy.position.x - bullet.position.x;
      const deltaY = enemy.position.y - bullet.position.y;
      const hypotenuse = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      if (hypotenuse < 24) {
        enemy.isDead = true;
        bullet.isDead = true;
        scoreAmount += Math.round(currentTime);
      }
    });
  });

  scene.update(deltaTime, currentTime);
  renderer.render(scene);
}

init();
