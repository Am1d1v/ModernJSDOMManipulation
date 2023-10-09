


const content = document.querySelector('.content');
const div = document.querySelector('div');
const titles = document.querySelectorAll('h1');
const btn = document.querySelector('.btn');

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







