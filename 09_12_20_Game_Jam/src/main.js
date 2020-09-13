import Game from "./lib/Game";
import Spaceship from "./entities/Spaceship";
import Texture from "./lib/Texture";
import Sprite from "./lib/Sprite";
import Bullet from "./entities/Bullet";
import Container from "./lib/Container";
import Enemy from "./entities/Enemy";
import math from "./utils/math";
import Text from "./lib/Text";
import { WIDTH, HEIGHT, HEIGHT_OF_ENEMY } from "./utils/constants";

const myGame = new Game(WIDTH, HEIGHT, "#board");
const ship = new Spaceship(WIDTH, HEIGHT);
ship.anchor = { x: -16, y: -16 };
const bgTexture = new Texture("./resources/background.png");
const bullets = new Container();
const enemies = new Container();
const score = new Text({
  text: "Score: ",
  styles: {
    fill: "red",
    align: "center",
    font: "20pt monospace",
  },
});

const gameOverText = new Text({
  text: "GAME OVER :(",
  styles: {
    fill: "limegreen",
    align: "center",
    font: "40pt sans-serif",
  },
});
gameOverText.position.x = WIDTH / 2;
gameOverText.position.y = HEIGHT / 2;
const shipGunPositionOffset = { x: 16, y: 10 };
let timeOfLastEnemySpawn = 0;
let spawnRate = 2;
let scoreAmount = 0;

score.position.x = WIDTH / 2;
score.position.y = 20;

//Add background before everything else.

myGame.add(new Sprite(bgTexture));
myGame.add(ship);
myGame.add(bullets);
myGame.add(enemies);
myGame.add(score);

myGame.run((deltaTime, currentTime) => {
  if (myGame.isGameOver) {
  }
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
    console.log("spawn");
    const enemy = new Enemy(WIDTH, Math.random() * (HEIGHT - HEIGHT_OF_ENEMY));
    enemy.anchor = { x: -16, y: -16 };
    enemies.add(enemy);
    timeOfLastEnemySpawn = currentTime;
  }

  //collision detection
  bullets.map((bullet) => {
    enemies.map((enemy) => {
      if (math.distance(bullet.position, enemy.position) < 20) {
        bullet.isDead = true;
        enemy.isDead = true;
        scoreAmount += Math.round(currentTime);
        score.text = `Score: ${scoreAmount}`;
      }

      //handle ship crash
      console.log(ship.position);
    });
  });

  enemies.map((enemy) => {
    if (math.distance(ship.position, enemy.position) < 32) {
      ship.isDead = true;
      enemy.isDead = true;
      myGame.doGameOver;
      myGame.add(gameOverText);
    }
  });
});
