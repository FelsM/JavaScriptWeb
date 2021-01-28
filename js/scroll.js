const sectOne = document.getElementById('one');
const sectTwo = document.getElementById('two');


//pageScroll

//document(html)
//document.documentElement(html)
//document.body(body)
//window


document.addEventListener('scroll', function(event){	
	// console.log(event);
})

//getScrollHeight


/*
+getComputedStyle(sectOne).height.split('px')[0]
sectOne.
*/



document.addEventListener('keydown', function(event){	
	event.preventDefault();

	if(event.keyCode === 40){
		smoothScroll(0, sectOne.offsetHeight);
	}else if(event.keyCode === 38){
		smoothScroll(sectOne.offsetHeight, 0)
	}
	console.log(document.documentElement.scrollTop)
})


function smoothScroll(from, to){
	const direction = from < to ? 'down' : 'up';
	const step = 1;
	const interval = 50;
	
		if(direction === 'down'){
			const scrollDown = setInterval(()=>{
				console.log(document.documentElement.scrollTop, to)
			if(document.documentElement.scrollTop < to){
				document.documentElement.scrollTop += step;
			}else{
				console.log('called')
				clearInterval(scrollDown);
			}
			}, interval)	
		}else{
			const scrollUp = setInterval(()=>{
			if(document.documentElement.scrollTop > to){
				document.documentElement.scrollTop -= step;
			}else{
				clearInterval(scrollUp);
			}
			}, interval)
	}
}

