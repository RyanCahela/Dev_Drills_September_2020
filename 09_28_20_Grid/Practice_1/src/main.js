import Game from "./lib/Game";
import Sprite from "./lib/Sprite";
import Text from "./lib/Text";
import Squizz from "./entities/Squizz";
import KeyboardControls from "./lib/KeyboardControls";
import Level from "./entities/Level";

const myGame = new Game({
  width: 640,
  height: 480,
  parentElementIdentifier: "#board",
});
const text = new Text({
  text: "Hello World",
  styles: {
    fill: "red",
    font: "20pt monospace",
    align: "center",
  },
  spawnPosition: {
    x: 640 / 2,
    y: 480 / 2,
  },
});

const cube = new Sprite();

const squizz = new Squizz({
  spawnPosition: { x: 0, y: 0 },
  controls: new KeyboardControls(),
});

const background = new Level({
  width: 640,
  height: 480,
});

myGame.add(background);
myGame.add(text);
myGame.add(cube);
myGame.add(squizz);
myGame.run((deltaTime, currentTime) => {
  const groundFrame = background.checkGround(squizz.position);
  console.log(groundFrame);
});
