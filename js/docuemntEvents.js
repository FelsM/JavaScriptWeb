// only DOM
/*document.addEventListener('DOMContentLoaded', function(event){

	const btn = document.getElementById('btn');

	btn.addEventListener('click', function(){
		alert('clicked');
	})


})*/


//_________________________________________________________


//window

//on page loaded
// window.addEventListener('load', function(){
// 	const btn = document.getElementById('btn');

// 	btn.addEventListener('click', function(){
// 		alert('clicked');
// 	})
// })


//user left a page
// window.addEventListener('unload', function(){
// 	console.log('leaving....')
// })


//before


// window.addEventListener('beforeunload', function(event){

// })


//error

window.addEventListener('error', function({message, lineno, colno, filename , error}){
	console.log(message);
	console.log(lineno);
	console.log(colno);
	console.log(filename);
	console.log(error);
	console.log('error');
})


 
/*console.log(document.readyState); // loading

document.addEventListener('DOMContentLoaded', function(event){
	console.log(document.readyState); // interactive
})

window.addEventListener('load', function(){
	console.log(document.readyState); // complete
})
*/



//__________________________________________________________________


//Scripts loading



// Scripts loading procees

/*const scripts = ['js/components/header.js', 'js/components/main.js', 'js/components/footer.js']

scripts.forEach((scriptPath)=>{
	const script = document.createElement('script');
	script.setAttribute('type', 'text/javascript');
	script.setAttribute('src', scriptPath)
	document.body.append(script);
})
*/

// const testScript = document.createElement('script');

// testScript.setAttribute('type', 'text/javascript');
// testScript.setAttribute('src', 'js/estScript.js');

// document.body.append(testScript);

// //
// testScript.addEventListener('load', function(){
// 	console.log('loaded');
// })

// //
// testScript.addEventListener('error', function(){
// 	console.log('error happenend during scripts uploading');
// })

















