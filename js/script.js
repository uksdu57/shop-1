let nav_toggle = document.getElementById('burger');
let nav_close = document.getElementById('navigation_close');
let navigation = document.getElementById('menu');
nav_toggle.addEventListener('click', function(){ 
    navigation.classList.toggle('display-block');
});
nav_close.addEventListener('click', function(){ 
    navigation.classList.remove('display-block');
});