


const content = document.querySelector('.content');
const div = document.querySelector('div');
const title = document.querySelector('h1');
const btn = document.querySelector('.btn');

/*
console.log(div.classList);

//div.classList.add('custom')

btn.addEventListener('click', () => {
    div.classList.toggle('custom');
    console.log(div.className)
})
console.log(div.classList.contains('custom'));

div.setAttribute('id', "myId");
console.log(div.getAttribute('id'));
console.log(div.hasAttribute('id'));

div.removeAttribute('id');
console.log(div.hasAttribute('id'));

console.log(div.dataset)
console.log(div.dataset.myattr)
*/

title.insertAdjacentHTML('beforebegin', '<h2>Insert</h2>');

const span = document.createElement('span');
console.log(span);
span.textContent = ' Content';
span.classList.add('spanClass');
title.appendChild(span);


const fragment = document.createDocumentFragment();
console.log(fragment);

const colors = ['lightblue', 'pink', 'violet'];
colors.forEach((color) => {
    const item = document.createElement('div');
    item.classList.add(`bg-${color}`);
    item.textContent = color;
    item.style.fontSize = '20px';
    item.style.fontWeight = '600';
    item.style.backgroundColor = color;
    fragment.appendChild(item);
})
document.body.appendChild(fragment);






