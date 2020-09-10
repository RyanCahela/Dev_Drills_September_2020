import Game from "./lib/Game";
import Texture from "./lib/Texture";
import TileSprite from "./lib/TileSprite";
import Squizz from "./entities/Squizz";
import { randomInt, randomFloat, randomOneIn } from "./utils/math";

const WIDTH = 640;
const HEIGHT = 480;
const myGame = new Game(WIDTH, HEIGHT, "#board");

const textures = {
  spaceship: new Texture("./resources/spacship.png"),
  squizz: new Texture("./resources/player-walk.png"),
};

for (let i = 0; i < 1000; i++) {
  const animationSpeed = randomFloat(0, 1);
  const numberOfFrames = 4;
  const squizz = new Squizz(animationSpeed, numberOfFrames);
  squizz.position.x = randomInt(WIDTH);
  squizz.position.y = randomInt(HEIGHT);
  myGame.add(squizz);
}

myGame.run(() => {});
