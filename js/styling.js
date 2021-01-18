const block = document.getElementById('block');


//className
console.log(block.className);

// block.className = 'block';

//classList
console.log(block.classList);

//classList.add(className)

block.classList.add('shadowed');

//classList.remove(className)

// block.classList.remove('bordered');

//classList.toggle(className);

block.classList.toggle('rounded');


setTimeout(()=>{block.classList.toggle('rounded')}, 2000);


//classList.contains(className)

console.log(block.classList.contains('shadowed'));

//_________________________________________________________________________



//style

/*block.style = `
				display: block;
				width: 200px;
				height: 200px;
				`;*/

// box-sizing -> boxSizing
/*block.style.boxSizing = 'border-box';
*/




console.log(block.style.width);

// getComputedStyle


const blockStyles = getComputedStyle(block);
console.log(blockStyles.width);


