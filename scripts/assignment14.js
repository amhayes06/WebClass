var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var x = [];
var y = []; 

var dx = 0;
var dy = 2;
bricky = 0;
var ballRadius = 10;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth) / 2;
var rightPressed = false;
var leftPressed = false;
var brickRowCount = 3;
var brickColumnCount = 6;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetBottom = 30;
var brickOffsetLeft = 30;
var score = 0;
var lives = 3000;
liveBall = 0;
ballCount = 0;

var bricks = [];
for (c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (r = 0; r < brickRowCount; r++) {
    bricks[c][r] = {
      x: 0,
      y: 0,
      status: 1
    };
  }
}

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

function keyDownHandler(e) {
  if (e.keyCode === 39) {
    rightPressed = true;
  } else if (e.keyCode === 37) {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.keyCode === 39) {
    rightPressed = false;
  } else if (e.keyCode === 37) {
    leftPressed = false;
  }
}

function drawBricks() {
  for (c = 0; c < brickColumnCount; c++) {
    for (r = 0; r < brickRowCount; r++) {
      if (bricks[c][r].status === 1) {
        bricky -= (dy*0.005);
        var brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
        var brickY = canvas.height - (r * (brickHeight + brickPadding)) - brickOffsetBottom + bricky;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}

function drawBall() {
  for (b=liveBall; b<ballCount; b++) {
    ctx.beginPath();
    ctx.arc(x[b], y[b], ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  }


}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, 15 + paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function collisionDetection() {
  for (b=liveBall; b<ballCount; b++) { //If ball hits bottom, remove it from game.
    if (y[b] >= canvas.height) {
      liveBall++;
    }
  }
  for (c = 0; c < brickColumnCount; c++) {
    for (r = 0; r < brickRowCount; r++) {
      var b = bricks[c][r];
      if (b.status === 1) {
        for (b=liveBall; b<ballCount; b++) {
          if (x[b] > bricks[c][r].x && x[b] < (bricks[c][r].x + brickWidth) && y[b] > bricks[c][r].y && y[b] < bricks[c][r].y + brickHeight) {
            liveBall++;
            bricks[c][r].status = 0;
            score++;
          if (score === brickRowCount * brickColumnCount) {
            alert("YOU WIN!");
            document.location.reload();
            }
          }
        }
      }
    }
  }
}

function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "0095DD";
  ctx.fillText("Score: " + score, 8, 20);
}

function drawLives() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "0095DD";
  ctx.fillText("TimeLeft: " + Math.floor(lives/100), canvas.width - 165, 20);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks();
  drawBall();
  drawPaddle();
  drawScore();
  drawLives();
  collisionDetection();
  if (ballCount == 0) {
    y[0] = 0;
  }
  for (b=0; b<ballCount; b++) {  
    y[b] += dy;
  }
  requestAnimationFrame(draw);
  lives--;
  if (lives < 0) {
    alert("YOU lose!");
    document.location.reload();
  }
}
document.addEventListener("mousemove", mouseMoveHandler);

function mouseMoveHandler(e) {
  var relativeX = e.clientX - canvas.offsetLeft;
  if (relativeX > 0 + paddleWidth / 2 && relativeX < canvas.width - paddleWidth / 2) {
    paddleX = relativeX - paddleWidth / 2;
  }
}

canvas.onclick = function() {
  if (y[ballCount-1] >=200 || y[ballCount] ==0) {
    ballCount++;
    x.push(paddleX + (paddleWidth/2));
    y.push(15);
  }
}

draw();