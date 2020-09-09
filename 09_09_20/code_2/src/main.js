import Game from "./lib/Game";
import Sprite from "./lib/Sprite";
import Texture from "./lib/Texture";
import Container from "./lib/Container";
import TileSprite from "./lib/TileSprite";
import { randomOneIn, randomInt } from "./utils/math";

const textures = {
  spaceship: new Texture("./resources/spaceship.png"),
  crosshair: new Texture("./resources/crosshair.png"),
  playerWalk: new Texture("./resources/player-walk.png"),
};

const WIDTH = 640;
const HEIGHT = 480;

const myGame = new Game(WIDTH, HEIGHT, "#board");

const squizz = new TileSprite(textures.playerWalk, 32, 32);

myGame.add(squizz);

myGame.run(() => {
  if (randomOneIn(20)) {
    squizz.frame.x = randomInt(3);
  }
});
