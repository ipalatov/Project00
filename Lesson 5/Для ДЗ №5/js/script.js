
let ulEl = document.querySelectorAll('.menu');
let liEl = document.querySelectorAll('.menu .menu-item');

//ulEl[0].removeChild(liEl[2]);
ulEl[0].insertBefore(liEl[2], liEl[1]);
let newEl = document.createElement('li');
newEl.classList.add('menu-item');
newEl.textContent = 'Пятый пункт';
ulEl[0].appendChild(newEl);

document.body.style.backgroundImage = 'url("img/apple_true.jpg")'; 

let divTitile = document.querySelectorAll('div .title');
divTitile[0].textContent = 'Мы продаем только подлинную технику Apple';


let divAdv = document.querySelectorAll('div .adv');

divAdv[0].remove();

let ans = prompt('отношение к технике apple?', ' хз');

let divPrompt = document.getElementById('prompt');
divPrompt.textContent = ans;

