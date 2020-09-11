import Game from "./lib/Game";
import Texture from "./lib/Texture";
import TileSprite from "./lib/TileSprite";
import Squizz from "./entities/Squizz";
import MouseControls from "./lib/MouseControls";
import Container from "./lib/Container";
import math from "./utils/math";

const WIDTH = 640;
const HEIGHT = 480;
const myGame = new Game(WIDTH, HEIGHT, "#board");
const controls = new MouseControls(myGame.renderer.view);
const balls = new Container();

for (let i = 0; i < 10; i++) {
  const animationSpeed = 0.1;
  const squizz = new Squizz(animationSpeed);
  squizz.position.y = math.randomInt(HEIGHT - 32);
  squizz.position.x = -32;
  balls.add(squizz);
}

myGame.add(balls);

myGame.run(() => {
  balls.map((squizz) => {
    const radiusOfSquizz = 16;
    //wrap around screen
    if (squizz.position.x > WIDTH + 32) {
      squizz.position.x = -32;
      squizz.speed *= 1.1;
    }

    //handle clicks
    if (
      controls.pressed &&
      math.distance(squizz.position, controls.position) < radiusOfSquizz
    ) {
      if (squizz.speed > 0) {
        squizz.speed = 0;
      } else {
        squizz.isDead = true;
      }
    }

    console.log("outside map", controls.pressed);
  });
  controls.update();
});
