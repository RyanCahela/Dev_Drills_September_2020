import Game from "./lib/Game";
import Spaceship from "./entities/Spaceship";
import Texture from "./lib/Texture";
import Sprite from "./lib/Sprite";
import Bullet from "./entities/Bullet";
import BulletContainer from "./entities/BulletContainer";
import Container from "./lib/Container";
import Enemy from "./entities/Enemy";
import math from "./utils/math";

const WIDTH = 640;
const HEIGHT = 300;
const myGame = new Game(WIDTH, HEIGHT, "#board");
const ship = new Spaceship(WIDTH, HEIGHT);
const bgTexture = new Texture("./resources/background.png");
const bullets = new BulletContainer(WIDTH, HEIGHT);
const enemies = new Container();
const shipGunPositionOffset = { x: 16, y: 10 };
let timeOfLastEnemySpawn = 0;
let spawnRate = 2;

//Add background before everything else.
myGame.add(new Sprite(bgTexture));
myGame.add(ship);
myGame.add(bullets);
myGame.add(enemies);

myGame.run((deltaTime, currentTime) => {
  if (ship.isFireing) {
    bullets.add(
      new Bullet(
        ship.position.x + shipGunPositionOffset.x,
        ship.position.y + shipGunPositionOffset.y
      )
    );
  }

  //spawn enamies
  if (spawnRate < currentTime - timeOfLastEnemySpawn) {
    enemies.add(new Enemy(WIDTH - 32, Math.random() * HEIGHT - 32));
    timeOfLastEnemySpawn = currentTime;
  }

  //collision detection
  bullets.map((bullet) => {
    if (bullet.position.x > WIDTH) {
      bullet.isDead = true;
    }
    enemies.map((enemy) => {
      if (math.distance(bullet.position, enemy.position) < 20) {
        bullet.isDead = true;
        enemy.isDead = true;
      }
    });
  });
});
