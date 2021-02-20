//  w - width, h - height

// Rect
function drawRect(){
	const canvas = document.getElementById('rect');
	const ctx = canvas.getContext('2d');
	//rect
	// fillRect(x,y,w,h)
	ctx.fillRect(10, 10, 100, 50);
	ctx.clearRect(15, 15, 90, 40);
	ctx.strokeRect(140, 10, 50, 100);


}


drawRect();


// Path
function drawPath(){
	const canvas = document.getElementById('path');
	const ctx = canvas.getContext('2d');
	
	ctx.beginPath();
	ctx.moveTo(0,0);


	//<line>
	ctx.lineTo(150,100);
	ctx.lineTo(150, 200);

	// stroke/fill
	ctx.fill();

	ctx.closePath();

}


drawPath();


//

function drawCircle(){
	const canvas = document.getElementById('circle');
	const ctx = canvas.getContext('2d');
	// (x,y,radius, startAngle, endAngle, antiClockWise);
	ctx.arc(150, 100, 50 , 0, Math.PI*2, true);


	// (x1,y1,x2,y2, radius);
	ctx.arcTo(50,50,100,100,50);


	ctx.stroke();

}


drawCircle();



function drawCircle(){
	const canvas = document.getElementById('circle');
	const ctx = canvas.getContext('2d');
	// (x,y,radius, startAngle, endAngle, antiClockWise);
	ctx.arc(150, 100, 50 , 0, Math.PI*2, true);


	// (x1,y1,x2,y2, radius);
	ctx.arcTo(50,50,100,100,50);


	ctx.stroke();

}


drawCircle();





function drawCurve(){
	const canvas = document.getElementById('curve');
	const ctx = canvas.getContext('2d');
	// (x,y,radius, startAngle, endAngle, antiClockWise);
	
	//curve
	ctx.beginPath();
	ctx.moveTo(20,30);
	// ctx.quadraticCurveTo(cpx,cpy, x, y)
	ctx.quadraticCurveTo(150,170, 230, 30)
	ctx.stroke();
	ctx.closePath();


	//point
	ctx.beginPath();
	ctx.arc(150,170, 2, 0, Math.PI*2);
	ctx.fill();
	ctx.closePath();

	//line
	ctx.beginPath();
	ctx.moveTo(150,170);
	ctx.lineTo(230,30);
	ctx.stroke();
	ctx.closePath();
	//line
	ctx.beginPath();
	ctx.moveTo(150,170);
	ctx.lineTo(20,30);
	ctx.stroke();
	ctx.closePath();
	

}


drawCurve();

function drawBezierCurve(){
	const canvas = document.getElementById('bCurve');
	const ctx = canvas.getContext('2d');
	// (x,y,radius, startAngle, endAngle, antiClockWise);
	
	//curve
	ctx.beginPath();
	ctx.moveTo(20,30);
	// ctx.bezierCurve(cp1x,cp1y,cp2x,cp2y, x, y)
	ctx.bezierCurveTo(100,170,175, 150,230, 30)
	ctx.stroke();
	ctx.closePath();


	//point
	ctx.beginPath();
	ctx.arc(100,170, 2, 0, Math.PI*2);
	ctx.fill();
	ctx.closePath();
	//point
	ctx.beginPath();
	ctx.arc(175,150, 2, 0, Math.PI*2);
	ctx.fill();
	ctx.closePath();


	//line
	ctx.beginPath();
	ctx.moveTo(100,170)
	ctx.lineTo(20,30)
	ctx.stroke();
	ctx.closePath();
	//line
	ctx.beginPath();
	ctx.moveTo(175,150)
	ctx.lineTo(230,30)
	ctx.stroke();
	ctx.closePath();
	

}

drawBezierCurve();


function drawStyling(){
	const canvas = document.getElementById('styling');
	const ctx = canvas.getContext('2d');
	// (x,y,radius, startAngle, endAngle, antiClockWise);

	//createRadialGradient(x1,y1,r1, x2,y2,r2)
	const grad2 = ctx.createRadialGradient(50,50,1,50,50,20);
	grad2.addColorStop(0, 'red');
	grad2.addColorStop(0.5, 'green');
	grad2.addColorStop(1, 'blue');

	//point
	ctx.beginPath();
	ctx.arc(50,50, 20, 0, Math.PI*2);
	//color
	ctx.fillStyle = grad2;
	ctx.fill();
	ctx.closePath();
	



	//point
	ctx.beginPath();
	ctx.arc(150,50, 20, 0, Math.PI*2);
	ctx.fillStyle = 'green';
	ctx.fill();
	ctx.closePath();


	//line
	ctx.beginPath();
	ctx.moveTo(70,50);
	ctx.lineTo(130,50);
	ctx.strokeStyle = '#f0ab65';
	ctx.lineWidth = '10';
	ctx.stroke();
	ctx.closePath();
	

	//line
	ctx.beginPath();
	ctx.moveTo(250,10);
	ctx.lineTo(200,100);
	ctx.lineTo(250,150);
	ctx.lineTo(200,190);
	ctx.strokeStyle = 'blue';
	ctx.lineWidth = '10';

	// butt, round, square
	ctx.lineCap = 'square';

	//round, bevel, miter
	ctx.lineJoin = 'miter';
	ctx.stroke();
	ctx.closePath();

	//
	const grad1 = ctx.createLinearGradient(20,80,20,160);
	grad1.addColorStop(0, 'red');
	grad1.addColorStop(0.5, 'green');
	grad1.addColorStop(1, 'blue');


	//rect
	ctx.beginPath();
	//color
	ctx.fillStyle = grad1;
	
	ctx.fillRect(20, 80, 50, 80);
	ctx.closePath();


	

	//rect
	ctx.beginPath();
	//color
	ctx.fillStyle = 'red';
	ctx.globalAlpha = '0.3';
	ctx.fillRect(100, 150, 50, 20);
	ctx.closePath();




}

drawStyling();







