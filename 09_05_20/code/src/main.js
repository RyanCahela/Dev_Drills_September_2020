import { Container, Sprite, Texture, CanvasRenderer } from "./lib/index";

const WIDTH = 640;
const HEIGHT = 480;
const scene = new Container();
const renderer = new CanvasRenderer(WIDTH, HEIGHT);
const pngImage = new Texture("resources/spaceship.png");

console.log("pngImage", pngImage);
document.getElementById("board").appendChild(renderer.view);

for (let i = 0; i < 50; i++) {
  const spaceship = new Sprite(pngImage);
  spaceship.position.x = Math.random() * WIDTH;
  spaceship.position.y = Math.random() * HEIGHT;
  const speed = Math.random() * 200 + 50;

  spaceship.update = function (dt, t) {
    this.position.x += speed * dt;

    if (this.position.x > WIDTH) {
      this.position.x = -32;
    }
  };

  scene.add(spaceship);
}

console.log("scene", scene);

let dt = 0;
let timeOfLastFrame = 0;

requestAnimationFrame(loop);
function loop(ms) {
  requestAnimationFrame(loop);
  const t = ms / 1000;
  dt = t - timeOfLastFrame;
  timeOfLastFrame = t;

  scene.update(dt, t);
  renderer.render(scene);
}
