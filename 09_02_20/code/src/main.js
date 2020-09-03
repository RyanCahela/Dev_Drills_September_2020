import KeyboardControls from "./KeyboardControls";

const canvas = document.createElement("canvas");
canvas.height = 480;
canvas.width = 640;

document.getElementById("board").appendChild(canvas);

const ctx = canvas.getContext("2d");
const { height, width } = ctx.canvas;

let t = 0;
let dt = 0;
let timeOfLastFrame = 0;
let controls = new KeyboardControls();
let playerX = 0;
let playerY = 0;
let playerSpeed = 500;

function loop(ms) {
  requestAnimationFrame(loop);
  t = ms / 1000;
  dt = t - timeOfLastFrame;
  timeOfLastFrame = t;

  playerX += controls.x * playerSpeed * dt;
  playerY += controls.y * playerSpeed * dt;

  ctx.fillStyle = "orange";
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = "lightblue";
  ctx.fillRect(playerX, playerY, 50, 50);
}

requestAnimationFrame(loop);
