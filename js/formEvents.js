// const myForm = document.getElementById('myForm');
//Form interface

const myForm = document.forms.myForm;
const name = myForm.name;
const age = myForm.age;
const ageRange = myForm.ageRange;
const gender = myForm.gender;
const agree = myForm.agree;



// Find form if document
// 1 - document.forms[0] 
document.forms[0].style.backgroundColor = 'lightgreen'

// 2 - document.forms.myForm
/*console.log(document.forms.myForm);



// Find form elements if document
// elements - form elements Collection
console.log(document.forms.myForm.elements)


// Find form element if document
console.log(document.forms['myForm']['age']);

console.log(document.forms.myForm.name);

console.log(document.forms.myForm.elements.name);
*/

//

// name.value = 'Jhon Doe';
// age.value = 17;
// ageRange.value = 18;


// // checkboxes and radio buttons value getting and setting
// agree.checked = true;

// console.log(agree.checked);

// console.log(myForm.elements);


// // for select - manipulating only values
// gender.value = 'value2'

// console.log(gender.selectedIndex)

// console.log(gender.options)

// console.log(gender.value)

// // 1

// const newOption1 = document.createElement('option');
// newOption1.setAttribute('value', 'value4');
// newOption1.innerText = 'Label 4'
// gender.append(newOption1);


// // 2

// const newOption2 = new Option('Label 5', 'value5');
// gender.append(newOption2);



// console.log(newOption1);
// console.log(newOption2);




//INPUT EVENTS

// focus/blur
// do not Bubble

// name.addEventListener('focus', function(){
// 	this.style.border = 'none';
// 	this.style.outline = 'none';
// 	this.style.borderBottom = '1px solid violet';
// 	this.style.backgroundColor = 'lightgreen'
// });

// name.addEventListener('blur', function(){
// 	this.style.border = '10px solid blue';
// 	this.style.backgroundColor = 'red'
// });


// Bubble
// focusin/focusout

// name.addEventListener('focusin', function(){
	
// });

// name.addEventListener('focusout', function(){

// });


//change - after smth change in the input
const memoryObject = {
	name: '',
	age: '',
}
age.addEventListener('change', function(event){
	memoryObject.age = this.value;
	console.log(event);
})


//input - on putting smth in the input
name.addEventListener('input', function(event){
	console.log(this.value.length);
});


// copy/paste/cut

document.addEventListener('copy', function(event){
	event.preventDefault();	
	alert('You can not copy anything!')
});

name.addEventListener('paste', function(event){
	console.log(event);
});

name.addEventListener('cut', function(event){
	console.log(event);
});


//submit

myForm.addEventListener('submit', function(event){
	event.preventDefault();	
	console.log(event);
})






