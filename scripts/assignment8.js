var x,y=300;
var dx,dy=5;
let request = new XMLHttpRequest();
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext('2d');
var ballRadius = 10;

request.onload = function(){
    setInterval(draw, 10);
    alert('test2');
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    alert('test');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }
    
    x += dx;
    y += dy;
}