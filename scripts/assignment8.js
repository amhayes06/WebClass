x,y=300;
dx,dy=5;
myGame.fps=60;
let request = new XMLHttpRequest();

request.onload = function(){
    context= moveByCanvas.getContext('2d');
    setInterval(draw,50);
}

function draw() {
    
    context.clearRect(0,0, 400,400);
    context.beginPath();
    context.fillStyle='black';
    context.arc(x,y,20,0,Math.PI*2,true);
    context.closePath();
    context.fill();

    if( x<20 || x>380) dx=-dx;
    if( y<20 || y>380) dy=-dy;
    x+=dx;
    y+=dy;}

    myCanvas.onclick = function() {
    var d1 = Math.random() < 0.5 ? -1 : 1;
    var d2 = Math.random() < 0.5 ? -1 : 1;
    dx *= d1;
    dy *= d2;
}