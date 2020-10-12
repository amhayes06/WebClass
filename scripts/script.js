// Copyright 2006-2007 javascript-array.com

var timeout	= 500;
var closetimer	= 0;
var ddmenuitem	= 0;

// open hidden layer
function mopen(id)
{	
	// cancel close timer
	mcancelclosetime();

	// close old layer
	if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';

	// get new layer and show it
	ddmenuitem = document.getElementById(id);
	ddmenuitem.style.visibility = 'visible';

}
// close showed layer
function mclose()
{
	if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';
}

// go close timer
function mclosetime()
{
	closetimer = window.setTimeout(mclose, timeout);
}

// cancel close timer
function mcancelclosetime()
{
	if(closetimer)
	{
		window.clearTimeout(closetimer);
		closetimer = null;
	}
}

// close layer when click-out
document.onclick = mclose; 

var i = 0;
var canvas = document.getElementById("myCanvas");
var radius = canvas.width/2;
var ctx = canvas.getContext("2d");

function drawCircle() {

	ctx.clear();

	var i = 0;
	var x = radius+radius*Math.cos(i);
	var y = radius+radius*Math.sin(i);

	ctx.beginPath();
	ctx.moveTo(x,y);

	for (var i=0;i<=2*Math.PI;i+=0.1) {
		x = Math.floor(radius+radius*Math.cos(i));
		y = Math.floor(radius+radius*Math.sin(i));
		ctx.lineTo(x,y);
		ctx.stroke();
	}
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

function stopCircle() {

}