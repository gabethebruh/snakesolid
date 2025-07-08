//canvas
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");


//player
const snakeSize = 30;
let snakeSpeed = 5;
let snakePosX = 0;
let snakePosY = canvas.height / 2 - snakeSize / 2;

//farba snake
ctx.beginPath();
ctx.arc(snakePosX + snakeSize, snakePosY, snakeSize, 0, 2 * Math.PI);
ctx.fillStyle = "#cf99bb";
ctx.fill();
ctx.strokeStyle = "#cf99bb";
ctx.stroke();

// loop
function gameLoop() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    snakePosX += snakeSpeed;

    if (snakePosX > canvas.width) {
        snakePosX = 0;
    }

    ctx.beginPath();
    ctx.arc(snakePosX + snakeSize, snakePosY, snakeSize, 0, 2 * Math.PI);
    ctx.fillStyle = "#cf99bb";
    ctx.fill();
    ctx.strokeStyle = "#cf99bb";
    ctx.stroke();

    requestAnimationFrame(gameLoop);
}
gameLoop();