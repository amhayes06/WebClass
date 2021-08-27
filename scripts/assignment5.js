var tInc = 7.5;
var t = 0;
var maxRun = 500;
var c = document.getElementById("myCanvas");
var posX = (c.width / 2);
var posY = (c.height / 2);
var ctx = c.getContext("2d");
var R = c.width *.2;
var r = R * Math.floor(Math.random() * 10) /10;
var O = r * 0.5;
var timesRun;

function doDrawing() {
	r = R * Math.floor(Math.random() * 10) /10;
	O = r * 0.5;
	timesRun = 0;
	ctx.clear();
	ctx.beginPath();
	ctx.strokeStyle = '#' + Math.floor(Math.random() * 16777215).toString(16);
	ctx.moveTo(posX, posY);
	var interval = setInterval(function() {
		timesRun += 1;
		if (timesRun === maxRun) {
			clearInterval(interval);
		}
		drawCircle();

		},
	);
}

function drawCircle() {
  t += tInc;
  var x = Math.floor(posX + (R + r) * Math.cos(t) + (r + O) * Math.cos(((R - r) / r) * t));
  var y = Math.floor(posY + (R + r) * Math.sin(t) - (r+ O) * Math.sin(((R - r) / r) * t));
  ctx.lineTo(x, y) * (c.width / 2);
  ctx.stroke();
}

CanvasRenderingContext2D.prototype.clear = 
	CanvasRenderingContext2D.prototype.clear || function (preserveTransform) {
		if (preserveTransform) {
			this.save();
			this.setTransform(1, 0, 0, 1, 0, 0);
		}

	this.clearRect(0, 0, this.canvas.width, this.canvas.height);

	if (preserveTransform) {
		this.restore();
	}           
};