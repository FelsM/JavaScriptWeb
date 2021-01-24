const output = document.getElementById('output');

document.documentElement.addEventListener('keydown', function(event){
	document.body.style.backgroundColor = 'purple';
	console.log('KeyDown');
	console.log(event);
})
document.documentElement.addEventListener('keyup', function(event){
	document.body.style.backgroundColor = 'red';
	console.log('KeyUP');
	console.log(event);
})	


// between keydown and keyup
document.documentElement.addEventListener('keypress', function(event){
	console.log('KeyPress');
	console.log(event);
});	

