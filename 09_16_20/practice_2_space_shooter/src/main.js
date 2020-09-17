import Game from "./lib/Game";
import Text from "./lib/Text";

const WIDTH = 640;
const HEIGHT = 480;
const myGame = Game(WIDTH, HEIGHT, "#board");

const message = Text({
  text: "Hello",
  styles: {
    font: "20pt monospace",
    fill: "green",
    align: "center",
  },
  position: {
    x: WIDTH / 2,
    y: HEIGHT / 2,
  },
});

myGame.add(message);

myGame.run();
