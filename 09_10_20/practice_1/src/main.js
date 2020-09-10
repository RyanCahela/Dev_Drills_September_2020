import Game from "./lib/Game";
import Texture from "./lib/Texture";
import TileSprite from "./lib/TileSprite";
import Squizz from "./entities/Squizz";
import MouseControls from "./lib/MouseControls";

const WIDTH = 640;
const HEIGHT = 480;
const myGame = new Game(WIDTH, HEIGHT, "#board");
const animationSpeed = 0.1;
const controls = new MouseControls(myGame.renderer.view);
const squizz = new Squizz(animationSpeed, controls);

myGame.add(squizz);

myGame.run(() => {});
