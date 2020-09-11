import Game from "./lib/Game";
import Squizz from "./entities/Squizz";
import Container from "./lib/Container";
import math from "./utils/math";
import MouseControls from "./lib/MouseControls";

const WIDTH = 640;
const HEIGHT = 480;

const myGame = new Game(WIDTH, HEIGHT, "#board");
const controls = new MouseControls(myGame.renderer.view);

const balls = new Container();

for (let i = 0; i < 10; i++) {
  const squizz = new Squizz(32, 32);
  squizz.position.y = math.randomInt(32, HEIGHT - 32);
  balls.add(squizz);
}

myGame.add(balls);

myGame.run((deltaTime) => {
  balls.map((squizz) => {
    if (squizz.position.x > WIDTH + 32) {
      squizz.position.x = -32;
    }
    if (
      math.distance(squizz.position, controls.position) < 16 &&
      controls.pressed
    ) {
      if (squizz.speed != 0) {
        squizz.speed = 0;
      } else {
        squizz.isDead = true;
      }
    }
  });
  controls.update();
});
