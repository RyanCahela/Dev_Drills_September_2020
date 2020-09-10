import Game from "./lib/Game";
import Texture from "./lib/Texture";
import TileSprite from "./lib/TileSprite";
import Squizz from "./entities/Squizz";

const WIDTH = 640;
const HEIGHT = 480;
const myGame = new Game(WIDTH, HEIGHT, "#board");

const textures = {
  spaceship: new Texture("./resources/spacship.png"),
  squizz: new Texture("./resources/player-walk.png"),
};

const squizz = new Squizz(0.1, 4);
const squizz2 = new Squizz(0.5, 4);

squizz2.position.x = 50;

myGame.add(squizz);
myGame.add(squizz2);

myGame.run(() => {});
