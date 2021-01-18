// console.log(document.body.children[0])


//document.getElementById(id) - id - element id

// const header = document.getElementById('header');
// Default output - HTMLElement
document.getElementById('header').style.color = 'red';
// text-transform -> textTransform
header.style.textTransform = 'uppercase';


// document.getElementsByTagName(tagName) - ex - h1
// Default output - HTMLCollection
const listItems = [...document.getElementsByTagName('li')];
listItems.forEach((listItem)=>{
	listItem.style.textTransform = 'uppercase';
});
console.log(listItems);



// document.getElementsByClassName(ClassName) - ex - listItem

// Default output - HTMLCollection
const selectedListItems = [...document.getElementsByClassName('listItem')];
selectedListItems.forEach((listItem)=>{
	listItem.style.color = 'violet';
});
console.log(selectedListItems);


// document.getElementsByName(Name) - ex - input[name="gender"] - name= gender

// Default output - NodeList
const inputNames = document.getElementsByName('gender');
inputNames.forEach((listItem)=>{
	listItem.style.margin = '20px';
});
console.log(inputNames);

// -------------------------------------------------------------------------------------

//document/element.querySelector(selector) - selector - css selector - return first element


// Default output - HTML 
const firstListItem = document.querySelector('ul > li:first-child');
firstListItem.style.backgroundColor = 'yellow';
console.log(firstListItem);


//document/element.querySelectorAll(selector) - selector - css selector - return first element


// Default output - NodeList 
const oddListItems = document.querySelectorAll('ul#list > li:nth-child(odd)');
oddListItems.forEach((listItem)=>{
	listItem.style.color = 'red'
})
console.log(oddListItems);


//elem.closest(selector) - ближайший предок(РОДИТЕЛЬ)

// Default output - HTMLElement 
listItems[0].children[0].children[0].closest('ul').style.backgroundColor = 'pink';


// elem.matches(selector) - 

// Default output - boolean

listItems.forEach((child)=>{
	if(child.matches('.specialListItem')){ child.style.color = 'blue'}
})






