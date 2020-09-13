import Game from "./lib/Game";
import Spaceship from "./entities/Spaceship";
import Texture from "./lib/Texture";
import Sprite from "./lib/Sprite";
import Bullet from "./entities/Bullet";
import Container from "./lib/Container";
import Enemy from "./entities/Enemy";
import math from "./utils/math";

const WIDTH = 640;
const HEIGHT = 300;
const myGame = new Game(WIDTH, HEIGHT, "#board");
const ship = new Spaceship(WIDTH, HEIGHT);
const bgTexture = new Texture("./resources/background.png");
const bullets = new Container();
const enemies = new Container();
const enemy = new Enemy(WIDTH, HEIGHT / 2);
const shipGunPositionOffset = { x: 16, y: 10 };
let timeOfLastEnemySpawn = 0;
let spawnRate = 2;

//Add background before everything else.
myGame.add(new Sprite(bgTexture));
myGame.add(ship);
myGame.add(bullets);
myGame.add(enemy);

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

  //collision detection
  bullets.map((bullet) => {
    enemies.map((enemy) => {
      if (math.distance(bullet.position, enemy.position) < 20) {
        bullet.isDead = true;
        enemy.isDead = true;
      }
    });
  });
});
