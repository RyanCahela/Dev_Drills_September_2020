import Game from "./lib/Game";
import Texture from "./lib/Texture";
import Sprite from "./lib/Sprite";
import Container from "./lib/Container";
import { randomInt } from "./utils/math";

const WIDTH = 640;
const HEIGHT = 480;

const game = new Game(WIDTH, HEIGHT, "#board");

const crosshair = game.add(
  new Sprite(new Texture("./resources/crosshair.png"))
);

const ships = game.add(new Container());

crosshair.anchor = { x: -16, y: -16 };

for (let i = 0; i < 10; i++) {
  const spaceship = new Sprite(new Texture("./resources/spaceship.png"));
  spaceship.position = { x: i * 50 + 100, y: HEIGHT / 2 };
  spaceship.pivot = { x: -16, y: -16 };
  spaceship.update = function (deltaTime, currentTime) {
    //wobbly ship
  };

  ships.add(spaceship);
}

game.run((deltaTime) => {
  const rpm = Math.PI * 2 * deltaTime;
  ships.map((ship, index) => {
    ship.rotation += index * rpm;
  });
});
