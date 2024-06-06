const nav = document.querySelector('nav');
const btn1 = document.createElement('button');
const btn2 = document.createElement('button'); 
const btn3 = document.createElement('button'); 

btn1.classList.add('btn1','home');
btn2.classList.add('btn1','menu');
btn3.classList.add('btn1','about');

btn1.textContent = 'Home';
btn2.textContent = 'Menu';
btn3.textContent = 'About';

nav.appendChild(btn1);
nav.appendChild(btn2);
nav.appendChild(btn3);