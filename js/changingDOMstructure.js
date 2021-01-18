// document.createTextNode(text) - text to wrtite

const textToCreate = `Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Ex, debitis.`;
const textNode = document.createTextNode(textToCreate);

const holder = document.getElementById('holder');

holder.append(textNode);

//document.createElement(elementName) - 

const h1 = document.createElement('h1');
const h2 = document.createElement('h2');
h1.className = 'heading';
h1.textContent = 'Hello world';
h2.textContent = 'From JavaScript';




// _____________________________________________________________________________
// elem.append(...nodes/node);

holder.append(h1, h2);

//elem.prepend(...nodes/node)

const list = document.createElement('ul');
const listItem = document.createElement('li');
listItem.textContent = 'Listt Item text';
list.append(listItem);

holder.prepend(list);


// elem.before(...nodes/node) - add element before 

const div = document.createElement('div');
//elem.cloneNode(deep) - deep = true/false - node clonning
const h2Clone = div.cloneNode(false);
div.append(h2Clone);


holder.before(div);



// elem.after(...nodes/node) - add element before 

const h3 = document.createElement('h3');
h3.innerHTML = `<span class="heading">Add after</span>`;

holder.after(h3);

//elem.replaceWith(...nodes/node)

const orderedList = document.createElement('ol');
const orderedListItem = listItem.cloneNode(false);
orderedListItem.textContent = 'Ordered list item';
orderedList.append(orderedListItem);
document.querySelector('ul').replaceWith(orderedList);

//node.remove()
textNode.remove();




// _____________________________________________________________________________
// elem.insertAdjacentHTML('option', 'element')

const block = document.getElementById('block');

// elem.insertAdjacentHTML('beforebegin', 'element') - before opening tag
block.insertAdjacentHTML('beforebegin', '<p>beforebegin</p>');

// elem.insertAdjacentHTML('afterbegin', 'element') - after opening tag
block.insertAdjacentHTML('afterbegin', '<p>afterbegin</p>');

// elem.insertAdjacentHTML('beforeend', 'element') - before closing tag
block.insertAdjacentHTML('beforeend', '<p>beforeend</p>');

// elem.insertAdjacentHTML('afterend', 'element') - afterend closing tag
block.insertAdjacentHTML('afterend', '<p>afterend</p>');




// _____________________________________________________________________________




const oldSchool = document.getElementById('oldSchool');


// elem.appendChild(node)

const elem1 = document.createElement('p');
elem1.textContent = 'appendChild';

oldSchool.appendChild(elem1);


// elem.insertBefore(node, nextNode)

const elem2 = document.createElement('p');
elem2.textContent = 'insertBefore';

oldSchool.insertBefore(elem2, elem1);

// elem.replaceChild(node, InsteadOF)

const elem3 = document.createElement('p');
elem3.textContent = 'replaceChild';

oldSchool.replaceChild(elem3, elem1);

// elem.removeChild(node)

oldSchool.removeChild(elem2);


// document.write()

document.write('<h1>Add content</h1>');








