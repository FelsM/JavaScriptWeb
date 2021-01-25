initDraggableObject();
const block = document.getElementById('block');

block.addEventListener('mousedown', startDrag);

block.addEventListener('mouseup', stopDrag);


function initDraggableObject(){
	const block = document.createElement('div');
	block.setAttribute('id', 'block');
	block.style.backgroundColor = 'red';
	block.style.width = '100px';
	block.style.height = '100px';
	document.body.append(block);
}

function startDrag(){
	block.style.position = 'absolute';
	document.documentElement.addEventListener('mousemove', dragging);
}

function moveTo(pageX, pageY){
	block.style.left = `${pageX - block.offsetWidth/2}px`
	block.style.top = `${pageY - block.offsetHeight/2}px`
}

function dragging(event){
	moveTo(event.pageX, event.pageY);
}

function stopDrag(){
	document.documentElement.removeEventListener('mousemove', dragging)
}


























