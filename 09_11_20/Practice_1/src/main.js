import Game from "./lib/Game";
import Squizz from "./entities/Squizz";
import Texture from "./lib/Texture";
import TileSprite from "./lib/TileSprite";
import Container from "./lib/Container";
import math from "./utils/math";
import MouseControls from "./lib/MouseControls";

const WIDTH = 640;
const HEIGHT = 480;
const myGame = new Game(WIDTH, HEIGHT, "#board");
const ballsCont = new Container();
const controls = new MouseControls(myGame.renderer.view);

for (let i = 0; i < 10; i++) {
  const squizz = new Squizz(32, 32);
  squizz.position.y = math.randomInt(0, HEIGHT - 32);
  ballsCont.add(squizz);
}

myGame.add(ballsCont);

myGame.run((deltaTime) => {
  ballsCont.map((squizz) => {
    if (squizz.position.x > WIDTH) {
      squizz.speed *= 1.1;
      squizz.position.x = -32;
    }

    if (
      controls.pressed &&
      math.distance(squizz.position, controls.position) < 16
    ) {
      if (squizz.speed !== 0) {
        squizz.speed = 0;
      } else {
        squizz.isDead = true;
      }
    }
  });
  controls.update();
});
