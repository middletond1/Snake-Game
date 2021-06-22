const canvas = document.getElementById("gameCanvas");
const canvasContext = canvas.getContext('2d');
let snakeXPosition = 60;
let snakeYPosition = 290;
let snakePixelsMovedX =  20;
let snakePixelsMovedY = 0;

function drawCanvas() {
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
};

function drawSnake() {
    canvasContext.fillStyle = 'Red';
    canvasContext.fillRect(snakeXPosition, snakeYPosition, 20, 20);
}

function drawApple() {
    canvasContext.fillStyle = 'Blue';
    canvasContext.fillRect(480, 290, 20, 20)
}

function moveSnake() {
    snakeXPosition = snakeXPosition + snakePixelsMovedX;
    snakeYPosition = snakeYPosition + snakePixelsMovedY;
}

document.addEventListener('keydown', function(event) {
    if (event.keyCode === 37) {
        snakePixelsMovedX = -20;
        snakePixelsMovedY = 0;
    }
    if (event.keyCode === 39) {
        snakePixelsMovedX = 20;
        snakePixelsMovedY = 0;
    }
    if (event.keyCode === 38) {
        snakePixelsMovedX = 0;
        snakePixelsMovedY = -20;
    }
    if (event.keyCode === 40) {
        snakePixelsMovedX = 0;
        snakePixelsMovedY = 20;
    }
});

setInterval(() => {
    drawCanvas();
    drawSnake();
    drawApple();
    moveSnake();
}, 1000);