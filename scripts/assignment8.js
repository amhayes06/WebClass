var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballCount = 100;
var x = [];
var y = [];
var dx = [];
var dy = [];
var r = [];
var gravity = .1;

window.onload = function(){
    for( i=0; i< ballCount; i++){
        x[i] = Math.random() * (canvas.width - 0);
        y[i] = Math.random() * (canvas.height - (canvas.height/2) + (canvas.height/2));
        dx[i] = Math.random() * 10;
        dy[i] = Math.random() * 2;
        r[i] = 10;
    }
    setInterval(draw, 10);
}

function drawBall() {
    for(i=0; i<ballCount;i++){
        ctx.beginPath();
        ctx.arc(x[i], y[i], r[i], 0, Math.PI*2);
        ctx.fillStyle = "#1040e0";
        ctx.fill();
        ctx.closePath();
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    for(i=0; i<ballCount; i++){
        if(x[i] + dx[i] > canvas.width-r[i] || x[i] + dx[i] < r[i]) {
            dx[i] = -dx[i];
        }
        if(y[i] + dy[i] > canvas.height-r[i] || y[i] + dy[i] < r[i]) {
            dy[i] = -dy[i]; 
            dy[i] *= 0.90;
            dx[i] *= 0.90;
        }
        x[i] += dx[i];
        y[i] += dy[i];
        dy[i] += gravity;
    }
}