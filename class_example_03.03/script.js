'use strict'

// console.log('hello');

let my_pElement = document.querySelector('#abc'); //I just assigned the p element named abc to a variable called my_pElement


my_pElement.textContent = 'Hello Again, I am a more efficient version';

document.querySelector('h1').textContent = 'I am not hardcoding'

document.querySelector('h2').textContent = 'I am an example of h2'

let myH2Heading = document.getElementById('heading2');

myH2Heading.innerHTML = '<p>This is an HTML inside of the H2 tag</p>';

// Two ways to target items on the HTML page (DOM)
// getElementById, querySelector
// We're able to assign the targeted element into its own variable
// textContent to "write" words into the html element
// innerHTML can be used to insert more HTML elements
