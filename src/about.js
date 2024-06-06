function about(){
    const content = document.querySelector('#content');
    const title   = document.createElement('div');
    const about   = document.createElement('div');

    title.textContent = "About";
    about.textContent = `This site was created to just practice with the stuff I've 
                        learned about webpack and will most likely get updated in the future :)`;

    about.classList.add('about');
    title.classList.add('about');

    content.appendChild(title);
    content.appendChild(about);
}

export default about;
