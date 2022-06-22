const container = document.querySelector('#container'); //



const content = document.createElement('div');  //create new div and store into a variable
content.classList.add('content'); // add class
content.textContent = 'This is the glorious text-content!'; // add text
container.appendChild(content);  //append to the div to container ,child of container


const redContent =document.createElement('p');
redContent.classList.add('redContent'); //redContent is the class name in html
redContent.textContent ='Hey I\'m Red'
container.appendChild(redContent); // redContent is the varaible for js file
redContent.style.color='red'; //use the varaible redContent instead of p

const blueContent =document.createElement('h3');
blueContent.classList.add('blueContent'); //blueContent is the class name in html
blueContent.textContent ='Hey I\'m a blue h3'
container.appendChild(blueContent); // blueContent is the varaible for js file
blueContent.style.color='blue'; //use the varaible blueContent instead of h3

const h1Content= document.createElement('h1');
h1Content.classList.add('h1Content');
h1Content.textContent='I\'m in a div';
content.appendChild(h1Content);
h1Content.style.backgroundColor='pink';
h1Content.style.border="4px solid"

const pContent= document.createElement('p');
pContent.classList.add('pContent');
pContent.textContent='ME TOO!';
content.appendChild(pContent);
pContent.style.backgroundColor='pink'
pContent.style.border="14px dashed"


//----------------------------------------------//
// const btn = document.querySelector('#btn');
// btn.onclick = () => alert("Hello World"); //() is empty bcuz no arg needed or arg is the click

const btn = document.querySelector('#btn');
btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });