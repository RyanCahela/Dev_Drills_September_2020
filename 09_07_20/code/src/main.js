import {
  Container,
  CanvasRenderer,
  Text,
  Sprite,
  Texture,
  KeyboardControls,
} from "./lib/index";

const FIRE_RATE = 0.5;

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
let timeOfLastBulletFire = 0;
let spawnSpeed = 1.0;
let lastSpawn = 0;
let scoreAmount = 0;
let gameOver = false;

//Score
const score = new Text(`Score:`, {
  font: "20px sans-serif",
  fill: "#8B8994",
  align: "center",
});

score.position.x = WIDTH / 2;
score.position.y = HEIGHT - 30;
scene.add(score);

//player
const spaceship = new Sprite(textures.spaceship);
spaceship.update = function (deltaTime, currentTime) {
  const speed = 200;
  this.position.x += keyboardInput.x * speed * deltaTime;
  this.position.y += keyboardInput.y * speed * deltaTime;

  if (!gameOver && keyboardInput.action) {
    if (currentTime - timeOfLastBulletFire < FIRE_RATE) return;
    timeOfLastBulletFire = currentTime;
    fireBullet(this.position.x, this.position.y);
  }

  if (this.position.x < 0) this.position.x = 0;
  if (this.position.x + 32 > WIDTH) this.position.x = WIDTH - 32;
  if (this.position.y < 0) this.position.y = 0;
  if (this.position.y + 32 > HEIGHT) this.position.y = HEIGHT - 32;
};

const bulletCont = new Container();
function fireBullet(x, y) {
  const bullet = new Sprite(textures.bullet);
  bullet.position.x = x + 25;
  bullet.position.y = y + 10;

  bullet.update = function (dt, t) {
    const bulletSpeed = 400;
    bullet.position.x += bulletSpeed * dt;

    if (bullet.position.x > WIDTH + 32) {
      console.log("dead bullet");
      bullet.isDead = true;
    }
  };
  bulletCont.add(bullet);
}

//bad guys
const enemyContainer = new Container();
function spawnEnemy(x, y, speed) {
  console.log("spawn");
  const enemy = new Sprite(textures.enemy);
  enemy.position.x = x;
  enemy.position.y = y;

  enemy.update = function (deltaTime, currentTime) {
    this.position.x += speed * deltaTime;
    //handle collisions
    enemyContainer.children.forEach((enemy) => {
      if (enemy.position.x < -32) {
        if (!gameOver) {
          doGameOver();
        }
        console.log("dead enemy");
        this.isDead = true;
      }
      bulletCont.children.forEach((bullet) => {
        const distanceX = enemy.position.x + 16 - (bullet.position.x + 8);
        const distanceY = enemy.position.y + 16 - (bullet.position.y + 8);

        if (Math.sqrt(distanceX * distanceX + distanceY * distanceY) < 24) {
          //A Hit!
          enemy.isDead = true;
          bullet.isDead = true;
          scoreAmount = Math.floor(currentTime);
        }
      });
    });
  };

  enemyContainer.add(enemy);
}

//game loop
function init() {
  scene.add(new Sprite(textures.background));
  scene.add(spaceship);
  scene.add(bulletCont);
  scene.add(enemyContainer);
  scene.add(score);
  requestAnimationFrame(loop);
}
function loop(ms) {
  if (gameOver) {
    console.log(scene);
    return;
  }
  requestAnimationFrame(loop);
  const currentTime = ms / 1000;
  deltaTime = currentTime - timeOfLastFrame;
  timeOfLastFrame = currentTime;

  //spawn enemys
  if (currentTime - lastSpawn > spawnSpeed) {
    lastSpawn = currentTime;
    const speed = -50 - Math.random() * Math.random() * 100;
    const position = Math.random() * (HEIGHT - 24);
    spawnEnemy(WIDTH, position, speed);

    //Accelerating for the next spawn
    spawnSpeed = spawnSpeed < 0.05 ? 0.6 : spawnSpeed * 0.97 + 0.001;
  }

  //handle collisions
  enemyContainer.children.forEach((enemy) => {
    bulletCont.children.forEach((bullet) => {
      const distanceX = enemy.position.x + 16 - (bullet.position.x + 8);
      const distanceY = enemy.position.y + 16 - (bullet.position.y + 8);

      if (Math.sqrt(distanceX * distanceX + distanceY * distanceY) < 24) {
        //A Hit!
        enemy.isDead = true;
        bullet.isDead = true;
        scoreAmount = Math.floor(currentTime);
      }
    });
  });

  scene.update(deltaTime, currentTime);
  renderer.render(scene);
}

function doGameOver() {
  const gameOverMessage = new Text("GAME OVER", {
    font: "40pt san-serif",
    align: "center",
    fill: "darkviolet",
  });

  gameOverMessage.position.x = 0;
  gameOverMessage.position.y = 120;

  scene.add(gameOverMessage);
  console.log("before remove spaceship", scene);
  scene.remove(spaceship);
  console.log("after remove spaceship", scene);
  gameOver = true;
}

document.getElementById("board").appendChild(renderer.view);
init();
