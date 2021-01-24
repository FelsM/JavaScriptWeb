const mouseBtn = document.getElementById('mousebtn');
const mouseBlock = document.getElementById('mouseblock');
const mouseHover = document.getElementById('mousehover');

// ___________________________________________Mouse clicking
/*mouseBtn.addEventListener('mousedown', function(){
	this.style.backgroundColor = 'blue';
	console.log('Mousedown')
});
mouseBtn.addEventListener('mouseup', function(event){
	event.currentTarget.style.backgroundColor = 'green';
	console.log('MouseUp')
});

document.addEventListener('contextmenu', function(event){
	// 1
	//предотвращает выполнение события по умолчанию
	event.preventDefault();
	alert('context menu called');
	console.log(event.which)
	// 1
	//предотвращает выполнение события по умолчанию при обработке в атрибуте => return true;
	
});*/



// Complex event
// click = mousedown + mouseup
// call after mouseup
mouseBtn.addEventListener('click', function(event){
	// 1 - leftButton, 3 - rightButton, 2 - middleButton
	//which button is clicked
	console.log(event.which)


	//whichSysytemKeys are clciked
	if(event.altKey) console.log(`Alt pressed ${event.altKey}`);// Opt for Mac
	if(event.ctrlKey) console.log(`Ctrl pressed ${event.ctrlKey}`);
	if(event.shiftKey) console.log(`Shift pressed ${event.shiftKey}`);
	if(event.metaKey) console.log(`CMD(Mac only) pressed ${event.metaKey}`)



	this.style.color = 'red';
	console.log('Click');
});

//dblclick = click + click
//call after 2 short click
mouseBtn.addEventListener('dblclick', function(){
	this.style.backgroundColor = 'red';
	console.log('dblClick');
});



// ___________________________________________Mouse movement over block


mouseBlock.addEventListener('mouseover', function(){
	this.style.boxShadow = '10px 10px 10px red';
	console.log('MouseOver');
	
});
mouseBlock.addEventListener('mouseout', function(){
	this.style.boxShadow = '10px 10px 10px yellow';
	console.log('MouseOut');
})

mouseBlock.addEventListener('mousemove', function(event){
	this.style.color = 'yellow';
	console.log('MouseOut');
})



// ___________________________________________Mouse hovering


mouseHover.addEventListener('mouseenter', function(event){
	this.style.color = 'white';
	// pageX, pageY
	console.log(event.pageX);
	console.log(event.pageY);
	// clientX, clientY
	console.log(event.clientX);
	console.log(event.clientY);
	// x, y
	console.log(event.x);
	console.log(event.y);
});

mouseHover.addEventListener('mouseleave', function(){
	this.style.color = 'red';
})


