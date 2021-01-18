// DOM - Document Object Model

// document.body.children[0].style = 'color:red';

//DOM basic structure
//--------------------------------------NODES and NODE TYPES
// Nodes - 1,3,8,9

const bodyRef = document.body;
const bodyChildNodes = bodyRef.childNodes;
const someLocalVariable = 'String from script';


// NodeTypes
/*
console.log(document.body.firstChild.nodeType); // 3 - text

console.log(document.body.lastChild.nodeType); // 1 - element 
console.log(document.body.childNodes[1].nodeType); //8 - comment
console.log(document.nodeType); // 9 - document

// nodeName, tagName
for(let i = 0; i < bodyChildNodes.length; i++){
	if(bodyChildNodes[i].nodeType == 1){
		console.log(`Tag Name ${bodyChildNodes[i].tagName}`)
		//innerHTML - содержимое вместе с вложенными тегами---------------------------------------------
		if(bodyChildNodes[i].tagName == 'H1') bodyChildNodes[i].innerHTML = `<span style="color:green">JavaScript Rules!</span>`;
		//textContent- только текст-------------------------------------------------------------------------------
		if(bodyChildNodes[i].tagName == 'H2') bodyChildNodes[i].textContent = `${someLocalVariable}`;
		//outerHTML - полный HTML узла
		if(bodyChildNodes[i].tagName == 'UL'){
			console.log(bodyChildNodes[i].childNodes[1]);
			console.log(bodyChildNodes[i].childNodes[1].outerHTML);
		} 
	}
	console.log(`Name - ${bodyChildNodes[i].nodeName} ; Type - ${bodyChildNodes[i].nodeType}; Value - ${bodyChildNodes[i].nodeValue} ; Data - ${bodyChildNodes[i].data}`);

}
*/




// ----------------------------------------------DOM Nodes Navigation---------------------------

/*
//1 - ELEMENT.childNodes
console.log(document.body.childNodes);

//2 - ELEMENT.firstChild

console.log(document.body.firstChild);


//3 - ELEMENT.lastChild

console.log(document.body.lastChild.nodeName);

// 4 - previousSibling

console.log(document.body.childNodes[2].previousSibling);

//5 - nextSibling

console.log(document.body.childNodes[2].nextSibling);

//6 - parentNode

console.log(document.body.childNodes[2].parentNode);
*/


//--------------------------------------------DOM Nodes(Elements) Navigation ----------------------------------
/*
//1 - ELEMENT.children
console.log(document.body.children);

//2 - ELEMENT.firstChild

console.log(document.body.firstElementChild);


//3 - ELEMENT.lastChild

console.log(document.body.lastElementChild);

// 4 - previousSibling

console.log(document.body.children[2].previousElementSibling);

//5 - nextSibling

console.log(document.body.children[2].nextElementSibling);

//6 - parentNode

console.log(document.body.childNodes[2].parentElement);


*/

//table
const table = document.body.firstElementChild;

//table
console.log(table.rows);
console.log(table.tHead);
console.log(table.tFoot);
console.log(table.tBodies);

//tbody
console.log(table.tBodies[0].rows);


// rows

console.log(table.tBodies[0].rows[0].cells);
// console.log(table.tHead.rows[0].selectionRowIndex) // 
console.log(table.tBodies[0].rows[0].rowIndex);

//td 

console.log(table.tBodies[0].rows[0].cells[0].cellIndex);








