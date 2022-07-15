
// Variable declaration for h1 and h2
let vh1 = '<h1>Hello World</h1>';
let vh2 = '<h2>How are you?</h2>';

//variable declaration for the div
let divInfo = document.querySelector('#info');

// Value assignment
divInfo.innerHTML = divInfo.innerHTML + vh1;
divInfo.innerHTML += vh2;


// Variable for <p> Start of the element

let divContainer = document.querySelector('#container');

let vp = '<p>Start of the element</p>';
divContainer.innerHTML += vp;

// End of the element 
document.write('End of the element');


