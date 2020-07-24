const close = document.getElementById('close');
const menuBtn = document.getElementById('menu');
const menu = document.getElementById('menu-content');
const dropdownContent = document.getElementById('menu-dropdown-content')
const plus = document.getElementById('plus');

menuBtn.addEventListener('click', () => {
    menu.style.display = 'block';
})

close.addEventListener('click', () => {
    menu.style.display = 'none'
})

function togDL() {
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
        plus.style.transform = 'rotate(0deg)'
    } else {
        dropdownContent.style.display = 'block';
        plus.style.transform = 'rotate(45deg)'
    }
}
