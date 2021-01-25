const block = document.getElementById('block');
const hole = document.getElementById('hole');

/*function move(){
	let top = 0;
	let left = 0;
	
	const animation = setInterval(()=>{

		if(top  < 100 && left < 100){
			top += 1;
			left+=1;
		}else{
			this.style.backgroundColor = 'blue';
			this.style.transform = 'rotateX(180deg)';
			clearInterval(animation);
		}

		this.style.top =`${top}px`;
		this.style.left = `${left}px`;
	
	}, 50);

	
}

block.addEventListener('click', move);
*/
// block.style.top = '0px';
// block.style.left = '0px';

let topPos = 0;
let leftPos = 0;
const step = 10;
const topToWin = getComputedStyle(hole).top;
const leftToWin = getComputedStyle(hole).left;
document.documentElement.addEventListener('keydown', function(event){
	
	switch(event.keyCode){
		case 37:
			leftPos -= step;
			break;
		case 38:
			topPos -= step;
			break;
		case 39:
			leftPos += step;
			break;
		case 40:
			topPos += step;
			break;
		
	}
	block.style.top = `${topPos}px`;
	block.style.left = `${leftPos}px`;
	if(`${topPos - 100 }px` === topToWin && `${leftPos - 50 }px` === leftToWin){
		hole.style.backgroundColor = 'yellow';
		alert('You win!')
	}


})



