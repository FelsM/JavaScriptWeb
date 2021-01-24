/*// ELEMNTS-----------------------------------

const block = document.getElementById('block');
const abs = document.getElementById('abs');


//offset



//left
console.log(`Block offset left ${block.offsetLeft}`);
//top
console.log(`Block offset top ${block.offsetTop}`);

//height
console.log(`Block offset height ${block.offsetHeight}`);

//width
console.log(`Block offset width ${block.offsetWidth}`);


//left
console.log(`Abs offset left ${abs.offsetLeft}`);

console.log(`Abs css left ${getComputedStyle(abs).left}`);


//top
console.log(`Abs offset top ${abs.offsetTop}`);
console.log(`Abs css top ${getComputedStyle(abs).top}`);


//parent
abs.offsetParent.style.backgroundColor = 'blue';
console.log(`Abs offset Parent ${abs.offsetParent}`);





console.log('_________________________________________')




//client

//left
console.log(`Block client left ${block.clientLeft}`);

//top
console.log(`Block client top ${block.clientTop}`);

//height
console.log(`Block client height ${block.clientHeight}`);

//width
console.log(`Block client width ${block.clientWidth}`);


//scroll 

//scrollHeight 

console.log(`Block scroll height ${block.scrollHeight}`);

//scrollWidth

console.log(`Block scroll width ${block.scrollWidth}`);


//scrollTop 

block.scrollTop = 250;

console.log(`Block scroll top ${block.scrollTop}`);


*/
// DOCUMENT-----------------------------------

//client

//left
console.log(`Document client left ${document.body.clientLeft}`);

//top
console.log(`Document client top ${document.body.clientTop}`);

//height
console.log(`Document client height ${document.body.clientHeight}`);

//width
console.log(`Document client width ${document.body.clientWidth}`);


//scroll 

//scrollHeight 

console.log(`Document scroll height ${document.body.scrollHeight}`);

//scrollWidth

console.log(`Document scroll width ${document.body.scrollWidth}`);




//scroll 

console.log(`Document scroll top ${document.body.scrollTop}`);

console.log(`Document scroll left ${document.body.scrollLeft}`);



// window.scrollBy(x,y);

const btn = document.getElementById('btn');
btn.onclick = function(){
	//1
	// document.documentElement.scrollTop = 100;

	// 2
	// window.scrollBy(x,y);
	// window.scrollBy(0, 50);

	//3
	// window.scrollBy(pageX,pageY);
	window.scrollTo(0,75);

	//elem.scrollIntoView(top)  - boolean - true - top - false - bottom
	btn.scrollIntoView(false)

}




