/*const btn = document.getElementById('eventBtn');

//DOM level 0
//1 event object
btn.onclick = function(eventData){
	//2
	this.style.backgroundColor = 'red';
	this.classList.add('clicked');
	console.log(eventData);
	alert('hello');
};


// Events DOM level  - 2
// elem.addEventListener(eventName, callBackFunction(), capture); //
btn.addEventListener('click', eventHandler1);

btn.addEventListener('click', eventHandler2);

// btn.removeEventListener('click', eventHandler1);


function eventHandler1(event){
	console.log(event);
	console.log('addEventListener 1');
}
function eventHandler2(){
	console.log('addEventListener 2');
}
*/

// Event Phases

//1 - погружение/перехват (capture)
//2 - на целевом элементе
//3 - всплытие()
/*
const wrapper = document.getElementById('wrapper');
const text = document.getElementById('text');
const btn = document.getElementById('btn');

const capture = true;

// document.documentElement.onclick = function(){
// 	console.log('document click');
// }

// document.body.onclick = function(){
// 	console.log('body click');
// }


wrapper.addEventListener('click', function(event){
	alert('wrapper clicked');
},capture);

text.addEventListener('click', function(event){
	//прерывание распространения события далее по DOM
	event.stopPropagation();
	alert('text clicked');
},capture);

btn.addEventListener('click', function(event){
	//прерывание распространения события далее по DOM
	event.stopPropagation();
	alert('btn clicked');
},capture);

*/


//делегирование обработки события 

//hasAttribute
//hasClass
//closest()
wrapper.addEventListener('click', function(event){
	if(event.target.getAttribute('id') === 'btn'){
		// event.currentTarget eq this
		//event.eventPhase
		event.currentTarget.style.backgroundColor = 'green';
	}else if(event.target.getAttribute('id') === 'text'){
		this.style.backgroundColor = 'blue';
	}else if(event.target == event.currentTarget){ // event.eventPhase === 2
		this.style.backgroundColor = 'lightblue';
	}
	console.log(event.eventPhase);
	alert('wrapper clicked');
});









