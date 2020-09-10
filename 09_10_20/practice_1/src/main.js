import Game from "./lib/Game";
import Texture from "./lib/Texture";
import TileSprite from "./lib/TileSprite";

const WIDTH = 640;
const HEIGHT = 480;
const myGame = new Game(WIDTH, HEIGHT, "#board");

myGame.run(() => {
  console.log("Blastoff!!!");
});
