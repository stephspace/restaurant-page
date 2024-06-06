export default function menu(){
    const content = document.querySelector('#content');
    const menu = document.createElement('div');
    const entrees = document.createElement('div');
    const item1 =   document.createElement('div');
    const item2 =   document.createElement('div');
    const item3 =   document.createElement('div');
    const itemname1 = document.createElement('div');
    const itemname2 = document.createElement('div');
    const itemname3 = document.createElement('div');
    const price1 =  document.createElement('div');
    const price2 =  document.createElement('div');
    const price3 =  document.createElement('div');

  
    menu.textContent = 'Our menu';
    entrees.textContent = 'Entrees';
    itemname1.textContent = 'CAPPUCCINO';
    itemname2.textContent = 'LATTE';
    itemname3.textContent = 'EXPRESSO';

    price1.textContent = '6.00';
    price2.textContent = '6.00';
    price3.textContent = '2.00';

    entrees.classList.add('entrees');
    item1.classList.add('menu-section');
    item2.classList.add('menu-section');
    item3.classList.add('menu-section');

    item1.appendChild(itemname1);
    item1.appendChild(price1);
    item2.appendChild(itemname2);
    item2.appendChild(price2);
    item3.appendChild(itemname3);
    item3.appendChild(price3);
  
    content.appendChild(entrees);
    content.appendChild(item1);
    content.appendChild(item2);
    content.appendChild(item3);
}