const canvas = document.querySelector("#basic-shapes");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const colorRed = "rgba(255, 26, 14, 1)";
const colorBlue = "rgba(54, 162, 235, 1)";
const colorYellow = "rgba(255, 206, 86, 1)";
const colorGreen = "rgba(75, 192, 192, 1)";
const colorPurple = "rgba(153, 102, 255, 1)";
const colorOrange = "rgba(255, 159, 64, 1)";
const colorBlack = "rgba(0, 0, 0, 1)";
const colorWhite = "rgba(255, 255, 255, 1)";

const radius = 5;
const angle = Math.PI / 180;

ctx.beginPath(); // Starting point
ctx.strokeStyle = colorRed;
ctx.lineWidth = 10;
ctx.arc(200, 300, radius, angle * 0, angle * 360, false); // Starting point
ctx.stroke();
