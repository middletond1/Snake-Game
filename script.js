const canvas = document.getElementById("gameCanvas");
const canvasContext = canvas.getContext('2d');
let snakeXPosition = 60;
let snakeYPosition = 280;
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

function randomXPosition() {
    return Math.floor(Math.random()*40)*20;
}

function randomYPosition() {
    return Math.floor(Math.random()*30)*20;
}

function drawApple() {
    canvasContext.fillStyle = 'Blue';
    canvasContext.fillRect(randomXPosition(), randomYPosition(), 20, 20)
}

function moveSnake() {
    snakeXPosition = snakeXPosition + snakePixelsMovedX;
    snakeYPosition = snakeYPosition + snakePixelsMovedY;
}

function gameOverCondition() {
    if (snakeXPosition < 0 || snakeXPosition === canvas.width || snakeYPosition < 0 || snakeYPosition === canvas.height) {
        return true;
    } 
    return false;
}

function gameOver() {
    if (gameOverCondition()) {
        alert('Game Over');
    } else return;
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
    drawApple();
    moveSnake();
    gameOver()
    drawSnake();
    randomXPosition()
}, 1000/2);