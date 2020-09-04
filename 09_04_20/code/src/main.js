import { Container, Text, CanvasRenderer } from "./lib/index";

const height = 480;
const width = 640;

const scene = new Container();

const message = new Text("Hello World", {
  fill: "brown",
  font: "30pt sans-serif",
  align: "center",
});

const renderer = new CanvasRenderer(width, height);

message.position.x = width / 2;
message.position.y = height / 2;

scene.add(message);
document.getElementById("board").appendChild(renderer.view);

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
