/*
BOM

events : load, unload, beforeunload, error

methods: setInterval, setTimeout, alert, confirm, prompt, getComputedStyle, scrollBy, scrollTo

props : scrollX, scrollY
*/

console.log(window);


const btn = document.getElementById('btn');
const btn2 = document.getElementById('btn2');
let windowToOpen;
btn.addEventListener('click', function(){
	//(url, name, params)

	


	//position and sizes
	const left = 'left=100,';
	const top = 'top=100,';
	const width = 'width=1000,';
	const height = 'height=1000,';


	//window

	// yes/no

	const menubar = 'menubar=no,';
	const toolbar = 'toolbar=no,';
	const location = 'location=no,';
	const status = 'status=yes,';
	const resizable = 'resizable=no,';
	const scrollbars = 'scrollbars=no';

	let params = `${width}${height}`;


	console.log(params);
	//open(url, name, features)
	windowToOpen =  window.open('file:///C:/Users/mserh/FELS/Front-end_Group_1_Live/JavaScriptWeb/scroll.html', 'googleSite', 'scrollbars=no,resizable=0,width=500,height=500,left=200,top=500');
	const h1 = windowToOpen.document.createElement('h1')
	h1.innerText = 'Hello from parent window!'
	windowToOpen.document.body.append(h1);

})

btn2.addEventListener('click', function(){
	windowToOpen.close();
})


// ____________________________________________________

//Iframes


const innerWindow = document.getElementById('innerWindow');
const iframes = [...document.getElementsByTagName('iframe')]
const message = document.getElementById('message');
console.log(innerWindow.contentWindow);
console.log(innerWindow.contentWindow.document.body);


innerWindow.addEventListener('load', function(){
 	console.log('loaded')
})



const sendBtn = document.getElementById('send')

send.addEventListener('click', function(){
	innerWindow.contentWindow.postMessage(message.value, '*');
	message.value = '';
})


window.addEventListener('message', function(event){
	console.log(event);
})
