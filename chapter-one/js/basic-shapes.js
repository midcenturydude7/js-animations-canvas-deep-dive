const canvas = document.querySelector("#basic-shapes");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillStyle = "red";
ctx.beginPath();
ctx.moveTo(10, 30);
ctx.bezierCurveTo(50, 90, 159, -30, 200, 30);
ctx.lineTo(200, 90);
ctx.lineTo(10, 90);
ctx.closePath();
ctx.fill();
ctx.lineWidth = 4;
ctx.strokeStyle = "black";
ctx.stroke();
