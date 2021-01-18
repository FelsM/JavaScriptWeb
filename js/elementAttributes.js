
//elem.getAttribute()
console.log(document.getElementById('anchor').getAttribute('href'));


//elem.setAttribute()

document.getElementById('anchor').setAttribute('href', 'https://someevilsite.com')	



// console.log(document.getElementById('anchor').getAttribute('href'));

//elem.attributes()
console.log(document.getElementById('anchor').attributes);


//elem.removeAttribute()
// document.getElementById('anchor').removeAttribute('href');


//elem.hasAttribute()
document.querySelector('input[type="text"]').hasAttribute('disabled');

let isValid = true;

if(isValid){
	if(document.querySelector('input[type="text"]').hasAttribute('disabled')){
		document.querySelector('input[type="text"]').removeAttribute('disabled')
	}	
}else{
	document.querySelector('input[type="text"]').setAttribute('disabled', 'disabled')
}




