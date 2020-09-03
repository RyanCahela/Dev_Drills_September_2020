import { Container, Text, CanvasRenderer } from "./lib/index";

const height = 480;
const width = 640;

const scene = new Container();

const renderer = new CanvasRenderer(width, height);

const message = new Text("Hello World", {
  align: "center",
  fill: "green",
  font: "20pt monospace",
});

message.position.x = width / 2;
message.position.y = height / 2;

document.getElementById("board").appendChild(renderer.view);

scene.add(message);

requestAnimationFrame(loop);
function loop(ms) {
  requestAnimationFrame(loop);

  renderer.render(scene);
}
