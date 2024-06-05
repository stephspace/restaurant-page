const nav = document.querySelector('nav');
const btn1 = document.createElement('button');
const btn2 = document.createElement('button'); 
const btn3 = document.createElement('button'); 

btn1.classList.add('btn1')
btn2.classList.add('btn1')
btn3.classList.add('btn1')

btn1.textContent = 'Home';
btn2.textContent = 'Menu';
btn3.textContent = 'Contact';

nav.appendChild(btn1);
nav.appendChild(btn2);
nav.appendChild(btn3);