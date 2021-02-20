const canvas = document.getElementById('canv');
const ctx = canvas.getContext('2d');
let latestPoint;
let isDrawing = false;



function drawing(newPoint){
	ctx.beginPath();
	ctx.moveTo(latestPoint[0],latestPoint[1]);
	ctx.strokeStyle = "lightgreen";
	ctx.lineWidth = "20";
	ctx.lineTo(newPoint[0], newPoint[1])
	ctx.stroke();

	latestPoint = newPoint;
}

function startDrawing(point){
	isDrawing = true;
	latestPoint = point;
}


// rect
// fillRect(x,y, width,height)
// ctx.fillRect(10,10, 200,200)

/*
	M - moveTo

			L - lineTo
			H - horizontalLineTo
			C - curveTo
			S - smoothCurveTo
			Q - quadtric Bezier to 
			T - smooth quadtric Bezier to
			A - eliptical Arc
			
			Z - closePath
*/

function mouseMove(event){
	if(!isDrawing){
		return
	}
	drawing([event.offsetX, event.offsetY])
}

function mouseDown(event){
	if(isDrawing){
		return
	}
	event.preventDefault();	
	canvas.addEventListener('mousemove', mouseMove);
	startDrawing([event.offsetX, event.offsetY]);
}

function mouseUp(){
	if(!isDrawing){
		return
	}
	isDrawing = false;
	canvas.removeEventListener('mousemove', mouseMove)
}
function mouseEnter(event){
	if(isDrawing){return}
	mouseDown(event)
}



canvas.addEventListener('mousedown', mouseDown)

canvas.addEventListener('mouesenter', mouseEnter)


canvas.addEventListener('mouseup', mouseUp);
canvas.addEventListener('mouseout', mouseUp);



