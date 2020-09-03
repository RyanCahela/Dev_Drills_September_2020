import KeyboardControls from "./KeyboardControls";
import MouseControls from "./MouseControls";

const canvas = document.createElement("canvas");
canvas.height = 480;
canvas.width = 640;
const keyboardInput = new KeyboardControls();
const mouseInput = new MouseControls(canvas);

document.getElementById("board").appendChild(canvas);
canvas.addEventListener("mouseenter", () => (controls = mouseInput), false);
canvas.addEventListener("mouseleave", () => (controls = keyboardInput), false);

const ctx = canvas.getContext("2d");
const { height, width } = ctx.canvas;

let t = 0;
let dt = 0;
let timeOfLastFrame = 0;
let controls = keyboardInput;
let playerX = 0;
let playerY = 0;
let playerSpeed = 500;

function loop(ms) {
  requestAnimationFrame(loop);
  t = ms / 1000;
  dt = t - timeOfLastFrame;
  timeOfLastFrame = t;

  if (controls?.position === undefined) {
    playerX += controls.x * playerSpeed * dt;
    playerY += controls.y * playerSpeed * dt;
  } else {
    playerX = controls.position.x;
    playerY = controls.position.y;
    controls.update();
  }

  ctx.fillStyle = "orange";
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = "lightblue";
  ctx.fillRect(playerX, playerY, 50, 50);
}

requestAnimationFrame(loop);
