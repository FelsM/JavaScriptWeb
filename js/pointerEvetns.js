// Pointer Events
const block = document.getElementById('block')

// PointerEventObj

//PointerId - устройство
//pointerType - тип события (click/touch);
//isPrimary - boolean - для multi-touch (true - for first tap/touch)


// pointerDown (mousedown)

block.addEventListener('mousedown', function(event){
	console.log('mouseDown')
	console.log(event)
});

block.addEventListener('pointerdown', function(event){
	console.log('pointerDown')
	console.log(event)
});

//poiterUp(mouseUp)

block.addEventListener('pointerup', function(event){
	console.log('pointerUp')
});

//___________________________________________


//poiterEnter(mouseEnter)

block.addEventListener('pointerenter', function(event){
	console.log(event.clientY);
});




//poiterMove(mouseMove)

block.addEventListener('pointermove', function(event){
	// console.log(event.clientX);
});

//pointerLeave(mouseLeave)
block.addEventListener('pointerleave', function(event){
	console.log(event.clientX);
});



//_________________________________________


//poiterOver(mouseOver)

block.addEventListener('pointerover', function(event){
	console.log('pointerOver');
});

//pointerOut(mouseOut)
block.addEventListener('pointerout', function(event){
	console.log('pointerOut');
});




// pointerCancel()

// генерируется при прирывании текущего pointerEvent
const pointerId = 1;


block.addEventListener('pointercancel', function(event){
	console.log('pointerCancel');
});

// elem.setPointerCapture()
//Установка устр-ва - Подмена(target на elem)
block.setPointerCapture(pointerId);


block.addEventListener('gotpointercapture', function(){

})

//1
block.releasePointerCapture(pointerId)

//2
//if elem was removed from DOM structure

//3
// pointerCancel() / pointerUp



//
block.addEventListener('lostpointercapture', function(){
		
});






