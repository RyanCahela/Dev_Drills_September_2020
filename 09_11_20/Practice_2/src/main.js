import Game from "./lib/Game";
import Squizz from "./entities/Squizz";
import Container from "./lib/Container";
import Texture from "./lib/Texture";
import MouseControls from "./lib/MouseControls";
import Sprite from "./lib/Sprite";
import math from "./utils/math";

const WIDTH = 640;
const HEIGHT = 480;

const myGame = new Game(WIDTH, HEIGHT, "#board");
const controls = new MouseControls(myGame.renderer.view);
//const spaceship = new Sprite(new Texture("./resources/spaceship.png"));

const balls = new Container();

for (let i = 0; i < 10; i++) {
  const squizz = new Squizz(32, 32);
  squizz.position.y = math.randomInt(0, HEIGHT - 32);
  balls.add(squizz);
}

myGame.add(balls);

myGame.run((deltaTime) => {
  balls.map((squizz) => {
    if (squizz.position.x > WIDTH + 32) {
      squizz.position.x = -32;
      squizz.speed *= 1.1;
    }

    if (
      controls.pressed &&
      math.distance(squizz.position, controls.position) < 16
    ) {
      if (squizz.speed === 0) {
        squizz.isDead = true;
      } else {
        squizz.speed = 0;
      }
    }
  });
  controls.update();
});
