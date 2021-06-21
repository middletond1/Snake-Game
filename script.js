const canvas = document.getElementById("gameCanvas");
const canvasContext = canvas.getContext('2d');
let snakeXPosition = 60;
let snakeYPosition = 290;
let snakePixelsMoved =  4;




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
    canvasContext.fillRect(490, 290, 20, 20)
}

document.addEventListener('keydown', function(event) {
    if (event.keyCode === 39) {
    snakeXPosition = snakeXPosition + snakePixelsMoved;
    }
});


setInterval(() => {
    drawCanvas();
    drawSnake();
    drawApple();
    moveSnake();
}, 1000/30);