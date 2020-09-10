import Game from "./lib/Game";
import Sprite from "./lib/Sprite";
import Texture from "./lib/Texture";
import TileSprite from "./lib/TileSprite";
import { randomInt, randomOneIn } from "./utils/math";

const textures = {
  spaceship: new Texture("./resources/spaceship.png"),
  squizz: new Texture("./resources/player-walk.png"),
};

const WIDTH = 640;
const HEIGHT = 300;

const myGame = new Game(WIDTH, HEIGHT, "#board");

const squizz = new TileSprite(textures.squizz, 32, 32);
myGame.add(squizz);

myGame.run((deltaTime, currentTime) => {
  const animationSpeedSeconds = 0.3;
  squizz.frame.x = Math.floor(currentTime / animationSpeed) % 4;
});
