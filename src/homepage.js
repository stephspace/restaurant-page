import './style.css';

function home(){
    const content = document.querySelector('#content');
    const restaurantName = document.createElement('div');
    const img1    = document.createElement('div');
    const items   = document.createElement('div');

    restaurantName.textContent = "Good Eats";
    restaurantName.classList.add("name");

    img1.classList.add('img1');
    items.classList.add('items');

    for(let i = 1; i <= 3; i++){
        const coffee = document.createElement('div');
        coffee.classList.add('coffee');

        const img2 = document.createElement('div');
        img2.classList.add('img2');
        const btn2 = document.createElement('button');
        btn2.classList.add('btn2');

        btn2.textContent = "Add to cart";
        coffee.appendChild(img2);
        coffee.appendChild(btn2);

        items.appendChild(coffee);
    }

    content.appendChild(restaurantName);
    content.appendChild(img1);
    content.appendChild(items);

    document.body.appendChild(content)
}

export default home;
