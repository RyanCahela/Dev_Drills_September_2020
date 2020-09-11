import Game from "./lib/Game";
import Squizz from "./entities/Squizz";
import Texture from "./lib/Texture";
import TileSprite from "./lib/TileSprite";

const WIDTH = 640;
const HEIGHT = 480;
const myGame = new Game(WIDTH, HEIGHT, "#board");

myGame.add(new Squizz(32, 32));

myGame.run();
