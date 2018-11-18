let burgerIcon = document.getElementById('burger');
let showMenu = document.getElementById('navbar');
let button = document.getElementById('button');
let home = document.querySelector('#next');
let hint = document.getElementById('hint');


burgerIcon.onmouseenter = function() {
    event.target.style.display = 'none';
    showMenu.style.display = 'block';
}
showMenu.onmouseleave = function() {
    event.target.style.display = 'none';
    burgerIcon.style.display = 'flex';
}

button.onmouseenter = function() {
    event.target.innerText = 'Watting Now'
}
button.onmouseleave = function() {
    event.target.innerText = 'Shop Now';
}
home.onmouseenter = function() {
    hint.innerText = 'musical instrument store';
}
home.onmouseleave = function() {
    hint.innerText = '';
}