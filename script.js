const canvas = document.getElementById("gameCanvas");
const canvasContext = canvas.getContext('2d');
let snakeBody = [
    {x: 60, y: 280},
    {x: 40, y: 280},
    {x: 20, y: 280}
]
let snakeBodyCopy = [
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
    snakeBody.forEach(snakePart => {
        canvasContext.fillStyle = 'Red';
        canvasContext.fillRect(snakePart.x, snakePart.y, 20, 20);
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
    for (let i = 0; i < snakeBody.length; i++) {
        if (i === 0) {
            continue;
        }
        snakeBody[i].x = snakeBodyCopy[i - 1].x;
        snakeBody[i].y = snakeBodyCopy[i - 1].y;
    };
}

function updateSnakeBodyCopy() {
    for (let i = 0; i < snakeBodyCopy.length; i++) {
        snakeBodyCopy[i].x = snakeBody[i].x;
        snakeBodyCopy[i].y = snakeBody[i].y;
    };
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
        if (snakePixelsMovedX === 20) {
            return;
        }
        snakePixelsMovedX = -20;
        snakePixelsMovedY = 0;
    }
    if (event.keyCode === 39) {
        if (snakePixelsMovedX === -20) {
            return;
        }
        snakePixelsMovedX = 20;
        snakePixelsMovedY = 0;
    }
    if (event.keyCode === 38) {
        if (snakePixelsMovedY === 20) {
            return;
        }
        snakePixelsMovedX = 0;
        snakePixelsMovedY = -20;
    }
    if (event.keyCode === 40) {
        if (snakePixelsMovedY === -20) {
            return;
        }
        snakePixelsMovedX = 0;
        snakePixelsMovedY = 20;
    }
});

setInterval(() => {
    drawCanvas();
    moveSnake();
    changeApplePosition();
    gameOver();
    drawApple();
    drawSnake();
    updateSnakeBodyCopy();
}, 1000/3);