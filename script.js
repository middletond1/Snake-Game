const canvas = document.getElementById("gameCanvas");
const canvasContext = canvas.getContext('2d');
let snakeBody = [
    {x: 60, y: 280},
    {x: 40, y: 280},
    {x: 20, y: 280}
]
let snakePixelsMovedX =  20;
let snakePixelsMovedY = 0;
let appleXPosition = randomXPosition();
let appleYPosition = randomYPosition();

function drawCanvas() {
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
};

function drawSnake() {
    snakeBody.forEach(snakeLink => {
        canvasContext.fillStyle = 'Red';
        canvasContext.fillRect(snakeLink.x, snakeLink.y, 20, 20);
    });
}

function randomXPosition() {
    return Math.floor(Math.random()*40)*20;
}

function randomYPosition() {
    return Math.floor(Math.random()*30)*20;
}

function hasSnakeTouchedApple() {
    if (snakeBody[0].x === appleXPosition && snakeBody[0].y === appleYPosition) {
        return true;
    } return false;
}

function changeApplePosition() {
    if (hasSnakeTouchedApple()) {
        appleXPosition = randomXPosition();
        appleYPosition = randomYPosition();
    }   
}

function drawApple() {
    canvasContext.fillStyle = 'Blue';
    canvasContext.fillRect(appleXPosition, appleYPosition, 20, 20)
}

function moveSnake() {
    snakeBody[0].x = snakeBody[0].x + snakePixelsMovedX;
    snakeBody[0].y = snakeBody[0].y + snakePixelsMovedY;
}

function gameOverCondition() {
    if (snakeBody[0].x < 0 || snakeBody[0].x === canvas.width || snakeBody[0].y < 0 || snakeBody[0].y === canvas.height) {
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
    moveSnake();
    changeApplePosition();
    drawApple();
    gameOver()
    drawSnake();
}, 1000/2);