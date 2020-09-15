import Game from "./lib/Game";
import Squizz from "./entities/Squizz";
import MouseControls from "./lib/MouseControls";
import Container from "./lib/Container";
import { randomInt, distance } from "./util/math";

const WIDTH = 640;
const HEIGHT = 300;
const myGame = Game(WIDTH, HEIGHT, "#board");
const squizzContainer = Container();

const controls = MouseControls(myGame.renderer.view);

for (let i = 0; i < 10; i++) {
  const squizz = Squizz(-32, Math.random() * HEIGHT);
  console.log(squizz);
  squizz.speed = randomInt(20, 100);
  squizzContainer.add(squizz);
}

myGame.add(squizzContainer);
myGame.run((deltaTime) => {
  squizzContainer.map((squizz) => {
    if (squizz.position.x > WIDTH) {
      squizz.position.x = -32;
    }

    if (controls.pressed && distance(squizz.position, controls.position) < 16) {
      console.log(squizzContainer);
      if (squizz.speed !== 0) {
        squizz.speed = 0;
      } else {
        squizz.isDead = true;
      }
    }
  });
  controls.update();
});
