const canvas = document.querySelector("#basic-shapes");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillStyle = "red";
ctx.beginPath();
ctx.moveTo(10, 30);
ctx.bezierCurveTo(50, 200, 640, -90, 800, 50);
ctx.lineTo(800, 200);
ctx.lineTo(10, 200);
ctx.closePath();
ctx.fill();
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.stroke();

ctx.fillStyle = "blue";
ctx.font = "30px Source Code Pro";
ctx.fillText("Hello World!", 100, 150);

const grad = ctx.createLinearGradient(200, 100, 500, 500);
grad.addColorStop(0, "white");
grad.addColorStop(0.5, "red");
grad.addColorStop(1, "black");
ctx.fillStyle = grad;
ctx.fillRect(100, 300, 200, 200);