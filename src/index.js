import homePage from './home';
import menuPage from './menu';
import aboutPage from './about'
import './tab';

homePage();

const home  = document.querySelector('.home');
const menu  = document.querySelector('.menu');
const about = document.querySelector('.about');
const content = document.querySelector('#content');

home.addEventListener('click',() => {
    while(content.firstChild){
        content.removeChild(content.firstChild);
    }
    homePage();
});

menu.addEventListener('click',() => {
    while(content.firstChild){
        content.removeChild(content.firstChild);
    }
    menuPage();
});

about.addEventListener('click',() => {
    while(content.firstChild){
        content.removeChild(content.firstChild);
    }
    aboutPage();
});
